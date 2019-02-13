Npm image for Wijmo ES2015 modules in ESM ('import from'/export) module format (minified)
=========================================================================================

This folder contains an npm image containing Wijmo core, interop modules in 
ESM module format, and corresponding TypeScript definition (.d.ts) files.
The folder also includes metadata files for the Angular AoT compiler 
(.metadata.json).

<b>NOTE:</b> despite the ".min" suffix not being present in .js file names, 
these files are MINIFIED.  The ".min" suffix is omitted in order to simplify 
module usage in conjunction with various application bundlers and loaders, 
where mapping of ambient module names used in applications (like "wijmo/wijmo.grid")
to minified file names with a ".min.js" extension would require additional steps
(and may not even be possible in some tools).

Because the folder content is formed as an npm image, you can easily install 
it in your application using an "npm install <path_to_folder>" command from 
the NodeJS command prompt:

	npm install ../wijmo_download/NpmImages/wijmo-es2015-esm-min

This command will add the folder content to the node_modules/wijmo folder of 
your application.

Alternatively, you can add the following record to the package.json file of your 
application:

	"dependencies": {
	   "wijmo": "../wijmo_download/NpmImages/wijmo-es2015-esm-min",
	   … other libraries
	}

After that, every time you execute an "npm install" command from your application's
root folder, Wijmo modules will be installed/updated under the "node_modules" folder 
along with other libraries in the package.json file.
