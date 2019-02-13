onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // url for all reports in this sample
    var serviceUrl = 'https://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report';
    document.querySelector('.service-url').textContent = serviceUrl;

    // update menu to show header and current value
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }


    /////////////////////////////////////////////////////////////////////
    // Getting Started
    var introReportViewer = new wijmo.viewer.ReportViewer('#introReportViewer', {
        serviceUrl: serviceUrl,
        filePath: 'ReportsRoot/Formatting/AlternateBackground.flxr',
        reportName: 'AlternateBackground'
    });


    /////////////////////////////////////////////////////////////////////
    // SSRS
    var ssrsReportViewer = new wijmo.viewer.ReportViewer('#ssrsReportViewer', {
        serviceUrl: serviceUrl,
        filePath: 'c1ssrs/AdventureWorks/Company Sales'
    });


    /////////////////////////////////////////////////////////////////////
    // Basic Features
    var basicReportViewer = new wijmo.viewer.ReportViewer('#basicReportViewer', {
        serviceUrl: serviceUrl,
        filePath: 'ReportsRoot/Formatting/AlternateBackground.flxr',
        reportName: 'AlternateBackground',
        zoomFactorChanged: function (s, e) {
            basicZoomFactor.value = s.zoomFactor;
        }
    });

    // change viewer properties
    document.getElementById('basicFullScreen').addEventListener('click', function (e) {
        basicReportViewer.fullScreen = e.target.checked;
    });
    var basicMouseMode = new wijmo.input.Menu('#basicMouseMode', {
        itemClicked: function (s, e) {
            basicReportViewer.mouseMode = s.selectedValue;
            updateMenuHeader(s, 'Mouse Mode');
        }
    });
    updateMenuHeader(basicMouseMode, 'Mouse Mode');
    var basicZoomFactor = new wijmo.input.InputNumber('#basicZoomFactor', {
        min: 0.05,
        max: 10,
        step: 0.1,
        format: 'n2',
        value: basicReportViewer.zoomFactor,
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                basicReportViewer.zoomFactor = s.value;
            }
        }
    });
    document.getElementById('basicContinuousViewMode').addEventListener('click', function (e) {
        basicReportViewer.viewMode = e.target.checked ? 'Continuous' : 'Single';
    });


    /////////////////////////////////////////////////////////////////////
    // Report Names
    var namesReportViewer = new wijmo.viewer.ReportViewer('#namesReportViewer', {
        serviceUrl: serviceUrl
    });

    // select report to display
    var namesReportPath = new wijmo.input.ComboBox('#namesReportPath', {
        selectedIndexChanged: function (s, e) {
            if (s.selectedValue) {
                var reportPath = s.selectedValue,
                    index = reportPath.lastIndexOf('/');
                filePath = reportPath.substr(0, index);
                reportName = reportPath.substr(index + 1);
                namesReportViewer.filePath = filePath;
                namesReportViewer.reportName = reportName;
            }
        },
        selectedIndex: 0 // select first report
    });
}