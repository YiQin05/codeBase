JavaScript and HTML Intellisense support for Visual Studio and VSCode
=====================================================================
This document explains how to add JavaScript and HTML Intellisense support 
for Wijmo library to Visual Studio and VSCode.

VSCode
======
HTML (Wijmo for Angular components)
-----------------------------------
Perform the following steps to add Intellisense support for Wijmo for Angular interop
to VSCode HTML editor:
1) In a running VSCode instance, click the "Extensions" icon on the left side menu.
2) In the opened "Extensions" pane click the "More" (triple dot) icon, and select 
  the "Install from VSIX..." menu item.
3) In the appeared Open File dialog choose the wijmo5-ng2-1.0.0.vsix file and
  click the Open button.
4) In the appeared flyout push the "Reload Now" button.


JavaScript
----------
Perform the following steps to add Intellisense support for Wijmo library 
to VSCode JavaScript editor for the Explicit Project:
1) Add .d.ts files from the Dist\controls folder of Wijmo zip to a location under the project root.
2) If jsconfig.json in the project contains the "files" option, add these .d.ts files to the "files" array, for example:
{
    "files": [
        "typings/wijmo.d.ts",
		"typings/wijmo.input.d.ts",
		etc........
    ]
}


VisualStudio
============
JavaScript
----------
Perform the following steps to add Intellisense support for Wijmo library
to Visual Studio JavaScript editor:
1) Put the wijmo.intellisense.js file, located in the same folder as this readme,
   to any convenient folder.
2) In Visual Studio, open the following settings pane:
Tools/Options/Text Editor/JavaScript/Intellisense/References
3) In the Reference Group combobox, choose 'Implicit (Web)'.
4) Add the reference to this wijmo.intellisense.js file.

