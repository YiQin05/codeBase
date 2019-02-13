DropDownTree
------------------------------------------------------------------------------
Shows how to extend the DropDown control to show a TreeView in the drop-down.

The sample creates a control that is similar to the MultiSelect with a
drop-down that contains a TreeView instead of a ListBox.

The DropDownTree control has the following main properties:

* treeView: Exposes the TreeView control shown in the drop-down

* itemsSource, displayMemberPath, childItemsPath, showCheckboxes: Properties
mapped to the treeView control.

* checkedItems, checkedItemsChanged: Gets or sets an array containing
the items currently selected.

* maxHeaderItems, headerFormat, headerFormatter: Properties used to build
the content displayed in the control header. These are similar to the
properties in the MultiSelect control.

