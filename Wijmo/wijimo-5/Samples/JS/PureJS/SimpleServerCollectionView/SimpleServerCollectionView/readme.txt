SimpleServerCollectionView
------------------------------------------------------------------------------
Shows how to implement a simple CollectionView class that retrieves data from a server.

The sample implements a simple data service and a SimpleServerCollectionView class 
that runs on the client.

A more complex example, ServerCollectionView, shows how to perform filtering
and sorting on the server.

The simple data service in this sample supports CRUD operations on the server.
The sorting and filtering are performed on the client.

The SimpleServerCollectionView class has four methods that must be customized
to fit custom data services:

1) _getData:   Gets an array of data from the server.
2) commitNew:  Commits a new item to the server.
3) commitEdit: Commits changes made to an item to the server.
4) remove:     Removes an item from the server.


** _getData **

Gets an array of data from the server.
The default implementation looks like this:

        // get the data
        protected _getData() {

            // go get the data
            httpRequest(this._getRequestUrl(), {
                data: {
                    ticks: Date.now() // discard buffer
                },
                success: (xhr) => {
                    var position = this.currentPosition,
                        response = this._parseJSON(xhr.response);
                    this.sourceCollection = response.value;
                    this.refresh();
                    if (position > -1) {
                        this.moveCurrentToPosition(position);
                    }
                    this.onLoaded();
                },
                error: (xhr) => {
                    if (this.onError(new RequestErrorEventArgs(xhr))) {
                        throw 'HttpRequest Error: ' + xhr.status + ' ' + xhr.statusText;
                    }
                }
            });
        }

Customizing this method should be a matter of replacing the call to _getRequestURL() with
the URL that returns your custom data.

This implementation adds a 'ticks' parameter to the call that prevents the browser from 
returning cached results which may be stale.


** commitNew **

Commits a new item to the server.
The default implementation looks like this:

        commitNew() {

            // commit to database
            var item = this.currentAddItem;
            if (item) {
                httpRequest(this._getRequestUrl(), {
                    method: 'POST',
                    requestHeaders: { 
                        'Accept': 'application/json' // to get new item back as JSON
                    },
                    data: item,
                    success: (xhr) => {
                        var newItem = this._parseJSON(xhr.response);
                        for (var key in newItem) {
                            item[key] = newItem[key];
                        }
                        this._getData();
                    },
                    error: this._error.bind(this)
                });
            }

            // allow base class
            super.commitNew();
        }

The method checks whether there is a current add item.
If so, it uses a POST request and passes the new item as data.

Upon success, it refreshes the new item's data with the
data returned from the server. After that, it calls _getData 
to re-load the data and show the changes. This step is optional.


** commitEdit **

Commits changes made to an item to the server.
The default implementation looks like this:

        commitEdit() {

            // commit to database
            var item = this.currentEditItem;
            if (item && !this.currentAddItem && !this._sameContent(item, this._edtClone)) {
                if (this.items.indexOf(item) > -1) {
                    httpRequest(this._getRequestUrl(this._edtClone), { // original id
                        method: 'PUT',
                        data: item,
                        success: (xhr) => {
                            if (!this.currentEditItem) {
                                this._getData();
                            }
                        },
                        error: this._error.bind(this)
                    });
                }
            }

            // allow base class
            super.commitEdit();
        }

The method checks whether there is a current edit item and whether it actually has
changes. If so, it uses a PUT request and passes the edited item as data.

Upon success, it calls _getData to re-load the data and show the changes.
This step is optional.


** remove **

Removes an item from the server.
The default implementation looks like this:

        remove(item: any) {

            // remove from database
            if (item && item != this.currentAddItem) {
                if (this.items.indexOf(item) > -1) {
                    httpRequest(this._getRequestUrl(item), {
                        method: 'DELETE',
                        success: (xhr) => {
                            this._getData();
                        },
                        error: this._error.bind(this),
                    });
                }
            }

            // allow base class
            super.remove(item);
        }

The method uses a DELETE request and includes the ID of the item to be removed
in the URL.

Upon success, it calls _getData to re-load the data and show the changes.
This step is optional.
