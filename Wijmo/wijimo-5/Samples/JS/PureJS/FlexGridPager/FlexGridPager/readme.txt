FlexGridPager
-------------------------------------------------------------------------------------
Demonstrates how to create a FlexGridPager class to provide grid-level pagination.

The differences between grid-level pagination and the more traditional
data-level pagination provided by the CollectionView class are:

1) The grid-level pagination takes into account the collapsed/expanded
state of group rows, so if you collapse or expand a group, the number 
rows displayed will correspond to the page size. Data-level pagination
does not account for collapsed groups, so if you collapse a group
the grid will display fewer rows than the page size.

2) The grid-level pagination keeps all grid rows loaded, and simply
hides rows that are not on the current page by setting their 
height to zero. The data-level pagination loads only the rows 
that correspond to data items on the current page.

3) The grid-level pagination affects only the <b>FlexGrid</b> it
is applied to. The data-level pagination affects all controls
bound to the collection view.

The FlexGridPager class also works with the wijmo.olap.PivotGrid control.