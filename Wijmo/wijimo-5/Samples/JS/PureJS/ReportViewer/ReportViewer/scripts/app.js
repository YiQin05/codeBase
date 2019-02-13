onload = function () {

    var reportView = new wijmo.viewer.ReportViewer('#reportViewer'),
        c1WebApiServiceUrl = 'https://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report',
        arServiceUrl = 'https://ardemos.grapecity.com/AR12-ReportsGallery/ActiveReports.ReportService.asmx',
        flexReportsCombo = document.querySelector('#flexReports'),
        ssrsReportsCombo = document.querySelector('#ssrsReports'),
        arReportsCombo = document.querySelector('#arReports');

    resizeViewer();
    window.addEventListener('resize', function () { resizeViewer(); });

    addNoneOption(flexReportsCombo);
    addNoneOption(ssrsReportsCombo);
    addNoneOption(arReportsCombo);

    document.querySelector('.c1webapi-service-url').textContent = c1WebApiServiceUrl;
    document.querySelector('.ar-service-url').textContent = arServiceUrl;

    // fill ArReports combo
    wijmo.httpRequest('arReport.config.json', {
        success: function (xhr) {
            var data = JSON.parse(xhr.responseText);
            fillArReportList(data);
            loadArReport();
        }
    });

    // fill FlexReport combo
    wijmo.httpRequest('flexReport.config.json', {
        success: function (xhr) {
            var data = JSON.parse(xhr.responseText);
            fillFlexReportList(data);
            //loadFlexReport();
        }
    });

    // fill SsrsReport combo
    wijmo.httpRequest('ssrsReport.config.json', {
        success: function (xhr) {
            var data = JSON.parse(xhr.responseText);
            fillSsrsReportList(data);
        }
    });

    function fillFlexReportList(reports) {
        reports.categories.forEach(function (category) {
            var categoryName = category.name,
                optGroup = createComboOptionGroup(category.text);

            category.reports.forEach(function (report) {
                var reportName = report.reportName,
                    fileName = 'ReportsRoot/' + categoryName + '/' + report.fileName,
                    option = createComboOption(report.reportTitle, fileName);

                option.setAttribute("ReportName", reportName);

                optGroup.appendChild(option);
            });

            flexReportsCombo.appendChild(optGroup);
        });
    }

    function fillSsrsReportList(reports) {
        reports.categories.forEach(function (category) {
            var optGroup = createComboOptionGroup(category.text);

            category.reports.forEach(function (report) {
                var option = createComboOption(report.reportTitle, 'c1ssrs/' + report.reportPath);
                optGroup.appendChild(option);
            });

            ssrsReportsCombo.appendChild(optGroup);
        });
    }

    function fillArReportList(reports) {
        var selectedReport = reports.selectedReport,
            selectedCategoryName = selectedReport.categoryName,
            selectedReportName = selectedReport.reportName;

        reports.categories.forEach(function (category) {
            var categoryName = category.name,
                optGroup = createComboOptionGroup(categoryName);

            category.reports.forEach(function (report) {
                var reportName = report.reportName,
                    fileName = report.fileName,
                    option = createComboOption(reportName, fileName);

                if (categoryName === selectedCategoryName && reportName === selectedReportName) {
                    option.selected = true;
                }

                optGroup.appendChild(option);
            });

            arReportsCombo.appendChild(optGroup);
        });
    }

    function loadFlexReport() {
        if (isNoneOptionSelected(flexReportsCombo)) {
            return;
        }

        if (reportView) {
            reportView.serviceUrl = c1WebApiServiceUrl;
            reportView.filePath = flexReportsCombo.value;
            reportView.reportName = getSelectedOption(flexReportsCombo).getAttribute('reportname');
            reportView.paginated = true;
        }
    }

    function loadSsrsReport() {
        if (isNoneOptionSelected(ssrsReportsCombo)) {
            return;
        }

        if (reportView) {
            reportView.serviceUrl = c1WebApiServiceUrl;
            reportView.filePath = ssrsReportsCombo.value;
            reportView.reportName = '';
            reportView.paginated = false;
        }
    }

    function loadArReport() {
        if (isNoneOptionSelected(arReportsCombo)) {
            return;
        }

        reportView.serviceUrl = arServiceUrl;
        reportView.filePath = arReportsCombo.value;
        reportView.reportName = '';
    }


    function addNoneOption(combo) {
        var optNone = document.createElement('option');
        optNone.value = 'None';
        optNone.innerHTML = '(None)';
        combo.appendChild(optNone);
    }

    function selectNoneOption(combo) {
        combo.selectedIndex = 0;
    }

    function isNoneOptionSelected(combo) {
        return combo.selectedIndex === 0;
    }

    function createComboOptionGroup(text) {
        var optGroup = document.createElement('optgroup');
        optGroup.label = text;

        return optGroup;
    }

    function createComboOption(text, value) {
        var option = document.createElement('option');

        option.innerHTML = text;
        option.value = value;

        return option;
    }

    flexReportsCombo.onchange = function () {
        selectNoneOption(ssrsReportsCombo);
        selectNoneOption(arReportsCombo);
        loadFlexReport();
    };

    ssrsReportsCombo.onchange = function () {
        selectNoneOption(flexReportsCombo);
        selectNoneOption(arReportsCombo);
        loadSsrsReport();
    };

    arReportsCombo.onchange = function () {
        selectNoneOption(flexReportsCombo);
        selectNoneOption(ssrsReportsCombo);
        loadArReport();
    };

    function resizeViewer() {
        reportView.hostElement.style.height = (Math.max(window.innerHeight * 0.95, 300)) + 'px';
    }

    function getSelectedOption(selectElement) {
        return selectElement.selectedOptions
            ? selectElement.selectedOptions[0]
            : selectElement.options[selectElement.selectedIndex];
    }
}