MyBI
------------------------------------------------------------------------------
A Simple Business Intelligence Progressive Web Application

This sample gets sales information stored in a Google Sheet and creates a
dashboard to support business decisions.

The data is stored in a Google Sheet and published to the web as a CSV file
which can be easily parsed on the client and stored for off-line usage. Updates 
made to the sheet are automatically reflected in the application when it runs.

The application UI includes four main elements: 

- Selection: The user chooses which region and product he wants to look at.

- Current Month: Two gauges show the latest sales and revenue for the current 
selection (region/product combination). The gauges include a range that shows 
the average plus and minus half a standard deviation so the user can evaluate
the current values at a glance.

- Trends: Two charts show the data for the current selection and add regression
lines so the user can see if sales and revenues are stable, trending up, or down
for the current selection.

- Details: A grid shows the data for the currently selected region and product
so users can inspect details. The grid shows sales and revenue data as bars so 
users can interpret the information quickly and easily.

The MyBI application is a progressive web app (PWA). It includes a manifest.json
file that contains the basic app info and icons, and a serviceWorks file that
allows it to work off-line using static and dynamic caches.