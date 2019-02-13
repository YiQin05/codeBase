onload = function () {

    // create the events to show on our calendar
    var events = getEvents();

    // create the calendar
    var calendar = document.getElementById('calendar'),
        tooltip = new wijmo.Tooltip(),
        start = new Date();
    for (var i = 0; i < 12; i++) {
        var month = createMonthControl(wijmo.DateTime.addMonths(start, -i));
        calendar.appendChild(month);
    }

    // create a month
    function createMonthControl(date) {

        // create the calendar
        var month = wijmo.createElement('<div class="month"></div>'),
            cal = new wijmo.input.Calendar(month, {
                showHeader: false,
                selectionMode: 'None',
                value: date,
                formatItem: formatDayCell
            });
        cal.refresh();

        // add a custom header element
        var fmt = wijmo.format('<div class="month-header">' +
            '<div class="month-title">{header}</div>' +
            '<div class="month-status">{uptime}% uptime</div>' +
            '</div>', {
                header: wijmo.Globalize.format(date, 'MMMM yyyy'),
                uptime: getUptime()
            });
        var newHeader = wijmo.createElement(fmt);
        var hdr = cal.hostElement.querySelector('.wj-calendar-header');
        hdr.parentElement.insertBefore(newHeader, hdr);

        // show only first letter of week day
        var cells = cal.hostElement.querySelectorAll('table tr.wj-header td');
        for (var i = 0; i < 7; i++) {
            cells[i].textContent = cells[i].textContent.substr(0, 1);
        }

        // done
        return month;
    }

    // format the calendar cells to show events
    function formatDayCell(s, e) {

        // format cell content
        var html = wijmo.format('<div>{date}</div>', {
            date: e.data.getDate()
        });
        var event = getEvent(e.data);
        html += event
            ? wijmo.format('<img src="resources/Table{type}.png"/>', event)
            : '<img/>';
        e.item.innerHTML = html;

        // add tooltip to cell
        var tip = wijmo.format('<div class="event-tip event-type-{eventType}">' +
                '<div>{date:MMM d, yyyy}</div>' +
                '<div class="event">{eventMessage}</div>' +
            '</div>', {
            date: e.data,
            eventMessage: event ? event.msg : 'No incidents, outages, or maintenance.',
            eventType: event ? event.type.toLocaleLowerCase() : 'none'
        });
        tooltip.setTooltip(e.item, tip)
    }

    // generate some events between now and a year ago
    function getEvents() {
        var arr = [],
            types = 'Maintenance,Incident,Notice,Outage'.split(','),
            messages = 'Connectivity Issues,ISP Reported Problem,Message Server Overflow,Security Alert,Email Failure,Power Instability,Power Outage'.split(',');
        for (var i = 0; i < 100; i++) {
            var dt = wijmo.DateTime.addDays(new Date(), -Math.round(Math.random() * 365));
            arr.push({
                id: i,
                date: dt,
                type: types[Math.floor(Math.random() * types.length)],
                msg: messages[Math.floor(Math.random() * messages.length)]
            });
        }
        return arr;
    }
    function getUptime(date) {
        var tm = [100, 99.75, 99.998, 99.98, 99.996, 99.93];
        return tm[Math.floor(Math.random() * tm.length)];
    }
    function getEvent(date) {
        for (var i = 0; i < events.length; i++) {
            if (wijmo.DateTime.sameDate(events[i].date, date)) {
                return events[i];
            }
        }
        return null;
    }

}
