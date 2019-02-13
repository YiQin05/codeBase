onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // server providing the PDF files
    var serviceUrl = 'https://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/pdf';
    document.querySelector('.service-url').textContent = serviceUrl;

    // show header and current value in Menus
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }


    /////////////////////////////////////////////////////////////
    // Getting Started
    var introPdfViewer = new wijmo.viewer.PdfViewer('#introPdfViewer', {
        serviceUrl: serviceUrl,
        filePath: 'PdfRoot/DefaultDocument.pdf'
    });


    /////////////////////////////////////////////////////////////
    // Basic
    var basicPdfViewer = new wijmo.viewer.PdfViewer('#basicPdfViewer', {
        serviceUrl: serviceUrl,
        filePath: 'PdfRoot/DefaultDocument.pdf',
        zoomFactorChanged: function (s, e) {
            zoomFactor.value = s.zoomFactor;
        }
    });

    // change viewer properties
    document.getElementById('basicFullScreen').addEventListener('click', function (e) {
        basicPdfViewer.fullScreen = e.target.checked;
    });;
    var mouseModeMenu = new wijmo.input.Menu('#basicMouseMode', {
        itemClicked: function (s, e) {
            basicPdfViewer.mouseMode = s.selectedValue;
            updateMenuHeader(s, 'Mouse Mode');
        }
    });
    updateMenuHeader(mouseModeMenu, 'Mouse Mode');
    var zoomFactor = new wijmo.input.InputNumber('#basicZoomFactor', {
        min: 0.05,
        max: 10,
        step: 0.1,
        format: 'n2',
        value: basicPdfViewer.zoomFactor,
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                basicPdfViewer.zoomFactor = s.value;
            }
        }
    });
    document.getElementById('basicContinuousViewMode').addEventListener('click', function (e) {
        basicPdfViewer.viewMode = e.target.checked ? 'Continuous' : 'Single';
    });
}