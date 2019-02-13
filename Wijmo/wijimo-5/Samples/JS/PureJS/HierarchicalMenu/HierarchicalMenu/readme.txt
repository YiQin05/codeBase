HierarchicalMenu
------------------------------------------------------------------------------
Shows how to create multi-level hierarchical menus using Wijmo's Menu control.

Wijmo Menu controls are based on arrays of objects that represent menu commands.
If you set the Menu's 'subItemsPath' property to the name of a property that
contains arrays with sub-items, the Menu will automatically create sub-menus
to represent the child items.

Like regular (flat) menus, hierarchical menus raise the 'itemClicked' event
when items are clicked by the user. They also support the 'command' property
to handle commands in an MVVM fashion, with a centralized function that 
enables and handles individual commands.

Like regular (flat) menus, hierarchical menus can be navigated with the mouse,
touch, or keyboard events.
