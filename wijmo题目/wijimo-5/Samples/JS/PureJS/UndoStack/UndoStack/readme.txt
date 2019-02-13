UndoStack
-------------------------------------------------------------------------------------
Demonstrates how to create an UndoStack class to provide form-level undo/redo services.

The UndoStack class monitors native HTML input elements and Wijmo controls on a given 
container. When the elements/controls raise change events, the UndoStack creates a
corresponding UndoableAction object and pushes it into an internal action stack.

The UndoStack exposes undo and redo methods that can be used to move a pointer through 
the action stack, and canUndo/canRedo properties that can be used to update the UI
showing whether there are currently actions that can be done or undone.

Note: UndoStack does not currently support Wijmo's ListBox control.
