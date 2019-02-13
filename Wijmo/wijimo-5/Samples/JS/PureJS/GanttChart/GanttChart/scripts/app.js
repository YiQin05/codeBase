onload = function () {

    // create simple Gantt chart
    new wijmo.chart.FlexChart('#simple-gantt', {
        itemsSource: getSimpleData(7),
        chartType: 'Bar',
        bindingX: 'name',
        tooltip: {
            content: getTooltipContent
        },
        axisY: {
            majorGrid: false,
            minorGrid: true,
            reversed: true
        },
        series: [
            { binding: 'start,end' }
        ]
    });

    // create advanced Gantt chart (showing completion percentage and dependencies)
    new wijmo.chart.FlexChart('#advanced-gantt', {
        itemsSource: getAdvancedData(),
        chartType: 'Bar',
        bindingX: 'name',
        tooltip: {
            content: getTooltipContent
        },
        axisY: {
            majorGrid: false,
            minorGrid: true,
            reversed: true
        },
        itemFormatter: ganttItemFormatter,
        rendered: ganttChartRendered,
        series: [
            { binding: 'start,end' }
        ]
    });

    // utilities
    function getTooltipContent(ht) {
        var str = wijmo.format('<b>{name}</b>:<br/>{start:d} - {end:d}', {
            name: ht.x,
            start: ht.item.start,
            end: ht.item.end
        });
        if (ht.item && ht.item.percent != null) {
            str += wijmo.format('<br/><i>percent complete: {percent}%</i>', ht.item);
        }
        return str;
    }

    // show the percentage complete for each task
    function ganttItemFormatter(engine, hti, defaultFormatter) {

        // draw the item as usual
        defaultFormatter();

        // show percentage done
        var task = hti.item;
        if (wijmo.isNumber(task.percent) && task.percent > 0) {
            var pct = wijmo.clamp(task.percent, 0, 100) / 100,
                rc = getTaskRect(hti.series.chart, task).inflate(-8, -8);
            engine.fill = pct == 1 ? 'green' : 'gold';//engine.stroke;
            engine.drawRect(rc.left, rc.top, rc.width * pct, rc.height);
        }
    }

    // show the task dependencies
    function ganttChartRendered(s, e) {
        var chart = s,
            tasks = chart.collectionView.items;
        tasks.forEach(function (task) { // for each task
            var parents = getTaskParents(task, tasks); // get the parent tasks
            parents.forEach(function (parent) { // for each parent
                drawConnectingLine(e.engine, chart, task, parent); // draw connector
            });
        });
    }
    function drawConnectingLine(engine, chart, task, parent) {
        var rc1 = getTaskRect(chart, parent),   // parent rect
            rc2 = getTaskRect(chart, task),     // task rect
            x1 = rc1.left + rc1.width / 2,      // parent x center
            x2 = rc2.left,                      // task left
            y1 = rc1.bottom,                    // parent bottom
            y2 = rc2.top + rc2.height / 2;      // task y center

        // draw connecting line
        var xs = [x1, x1, x2],
            ys = [y1, y2, y2];
        engine.drawLines(xs, ys, 'connector', {
            stroke: 'black'
        });

        // draw arrow at the end
        var sz = 5;
        xs = [x2 - 2 * sz, x2, x2 - 2 * sz];
        ys = [y2 - sz, y2, y2 + sz];
        engine.drawPolygon(xs, ys, 'arrow', {
            fill: 'black'
        })
    }
    function getTaskRect(chart, task) {
        var x1 = chart.axisX.convert(task.start),
            x2 = chart.axisX.convert(task.end),
            index = chart.collectionView.items.indexOf(task),
            y1 = chart.axisY.convert(index - .35),
            y2 = chart.axisY.convert(index + .35);
        return new wijmo.Rect(x1, y1, x2 - x1 + 1, y2 - y1 + 1);
    }
    function getTaskParents(task, tasks) {
        parents = [];
        if (task.parent) {
            task.parent.split(',').forEach(function (name) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].name == name) {
                        parents.push(tasks[i]);
                        break;
                    }
                }
            });
        }
        return parents;
    }

    // data for the simple Gantt chart
    function getSimpleData(cnt) {
        var data = [],
            date = new Date();
        for (var i = 0; i < cnt; i++) {
            var low = i + Math.ceil(Math.random() * 10),
                high = low + Math.ceil(Math.random() * 10);
            data.push({
                name: 'Task' + (i + 1),
                start: new Date(date.getTime() + low * 3600 * 24 * 1000),
                end: new Date(date.getTime() + high * 3600 * 24 * 1000)
            });
        }
        return data;
    }

    // data for the advanced Gantt chart
    function getAdvancedData() {
        var year = new Date().getFullYear();
        return [
            { name: 'Task1', start: new Date(year, 0, 1), end: new Date(year, 2, 31), parent: null, percent: 100 },
            { name: 'Task2', start: new Date(year, 3, 1), end: new Date(year, 3, 30), parent: 'Task1', percent: 100 },
            { name: 'Task3', start: new Date(year, 4, 1), end: new Date(year, 6, 31), parent: 'Task2', percent: 75 },
            { name: 'Task4', start: new Date(year, 3, 1), end: new Date(year, 6, 31), parent: 'Task1', percent: 33 },
            { name: 'Task5', start: new Date(year, 7, 1), end: new Date(year, 8, 30), parent: 'Task3,Task4', percent: 0 },
            { name: 'Task6', start: new Date(year, 9, 1), end: new Date(year, 11, 31), parent: 'Task1,Task5', percent: 0 },
            { name: 'Task7', start: new Date(year, 0, 1), end: new Date(year, 11, 31), parent: null, percent: 50 }
        ];
    }

}