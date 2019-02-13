onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // property values for the Wijmo Gauges
    var props = {
        autoScale: true,
        direction: 'Right',
        format: 'p0',
        isReadOnly: false,
        max: 1,
        min: 0,
        showRanges: true,
        showText: 'All',
        step: 0.25,
        startAngle: 0,
        sweepAngle: 180,
        ranges: {
            pointerThickness: 0.5,
            target: .75,
            lower: {
                min: 0,
                max: .33,
                color: 'rgba(255,100,100,.1)'
            },
            middle: {
                min: .33,
                max: .66,
                color: 'rgba(255,255,100,.1)'
            },
            upper: {
                min: .66,
                max: 1,
                color: 'rgba(100,255,100,.1)'
            }
        },
        value: 0.5
    };


    ///////////////////////////////////////////////////////
    // Getting started
    var gsLinearGauge = new wijmo.gauge.LinearGauge('#gsLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
    });
    var gsRadialGauge = new wijmo.gauge.RadialGauge('#gsRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
    });
    var gsValueInput = new wijmo.input.InputNumber('#gsValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            gsLinearGauge.value = s.value;
            gsRadialGauge.value = s.value;
        }
    });


    ///////////////////////////////////////////////////////
    // Displaying values
    var dvLinearGauge = new wijmo.gauge.LinearGauge('#dvLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        showText: props.showText
    });
    var dvRadialGauge = new wijmo.gauge.RadialGauge('#dvRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        showText: props.showText
    });
    var dvValueInput = new wijmo.input.InputNumber('#dvValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            dvLinearGauge.value = s.value;
            dvRadialGauge.value = s.value;
        }
    });
    var showTextMenu = new wijmo.input.Menu('#dvShowTextMenu', {
        selectedIndexChanged: function (s, e) {
            if (s.selectedValue) {
                dvLinearGauge.showText = s.selectedValue;
                dvRadialGauge.showText = s.selectedValue;
                s.header = '<b>Show Text</b>: ' + s.text;
            }
        },
        selectedValue: props.showText
    });


    ///////////////////////////////////////////////////////
    // Using Ranges

    // create the ranges
    var lowerRange = new wijmo.gauge.Range(props.ranges.lower),
        middleRange = new wijmo.gauge.Range(props.ranges.middle),
        upperRange = new wijmo.gauge.Range(props.ranges.upper);

    // create the gauges
    var urLinearGauge = new wijmo.gauge.LinearGauge('#urLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        pointer: {
            thickness: props.ranges.pointerThickness
        },
        ranges: [
            lowerRange,
            middleRange,
            upperRange
        ]
    });
    var urBulletGraph = new wijmo.gauge.BulletGraph('#urBulletGraph', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        good: props.ranges.middle.max,
        bad: props.ranges.middle.min,
        target: props.ranges.target
    });
    var urRadialGauge = new wijmo.gauge.RadialGauge('#urRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        pointer: {
            thickness: props.ranges.pointerThickness
        },
        ranges: [
            lowerRange,
            middleRange,
            upperRange
        ]
    });

    // change value
    var urValueInput = new wijmo.input.InputNumber('#urValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            urLinearGauge.value = s.value;
            urBulletGraph.value = s.value;
            urRadialGauge.value = s.value;
        }
    });

    // showRanges checkbox
    var showRanges = document.getElementById('urShowRanges');
    showRanges.checked = props.showRanges;
    showRanges.addEventListener('click', function (e) {
        var show = e.target.checked;
        urLinearGauge.showRanges = show;
        urBulletGraph.showRanges = show;
        urRadialGauge.showRanges = show;
    });

    ///////////////////////////////////////////////////////
    // Automatic Scaling
    var asRadialGauge = new wijmo.gauge.RadialGauge('#asRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        startAngle: props.startAngle,
        sweepAngle: props.sweepAngle,
        autoScale: props.autoScale
    });
    var asValueInput = new wijmo.input.InputNumber('#asValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            asRadialGauge.value = s.value;
        }
    });
    var asStartAngleInput = new wijmo.input.InputNumber('#asStartAngle', {
        value: props.startAngle,
        min: -360,
        max: 360,
        step: 45,
        valueChanged: function (s, e) {
            asRadialGauge.startAngle = s.value;
        }
    });
    var asSweepAngleInput = new wijmo.input.InputNumber('#asSweepAngle', {
        value: props.sweepAngle,
        min: 0,
        max: 360,
        step: 45,
        valueChanged: function (s, e) {
            asRadialGauge.sweepAngle = s.value;
        }
    });

    // toggle autoScale property
    var asAutoScaleInput = document.getElementById('asAutoScale');
    asAutoScaleInput.checked = props.autoScale;
    asAutoScaleInput.addEventListener('click', function (e) {
        asRadialGauge.autoScale = e.target.checked;
    });

    ///////////////////////////////////////////////////////
    // Direction
    var dLinearGauge = new wijmo.gauge.LinearGauge('#dLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        pointer: {
            thickness: props.ranges.pointerThickness
        },
        ranges: [
            lowerRange,
            middleRange,
            upperRange
        ]
    });
    var dBulletGraph = new wijmo.gauge.BulletGraph('#dBulletGraph', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        good: props.ranges.middle.max,
        bad: props.ranges.middle.min,
        target: props.ranges.target
    });
    var dValueInput = new wijmo.input.InputNumber('#dValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            dLinearGauge.value = s.value;
            dBulletGraph.value = s.value;
        }
    });
    var dDirection = new wijmo.input.Menu('#dDirection', {
        selectedIndexChanged: function (s, e) {
            if (s.selectedValue) {
                var direction = s.selectedValue,
                    vertical = direction.match(/Up|Down/i) != null;

                // update gauge direction
                dLinearGauge.direction = direction;
                dBulletGraph.direction = direction;

                // update CSS
                wijmo.toggleClass(dLinearGauge.hostElement, 'vertical-gauge', vertical);
                wijmo.toggleClass(dBulletGraph.hostElement, 'vertical-gauge', vertical);
                var dirCols = document.querySelectorAll('.direction-col');
                for (var i = 0; i < dirCols.length; i++) {
                    wijmo.toggleClass(dirCols[i], 'col-md-6', vertical);
                }

                // update menu text
                s.header = '<b>Direction</b>: ' + s.text;
            }
        },
        selectedValue: props.direction
    });

    ///////////////////////////////////////////////////////
    // Styling
    var sLinearGauge = new wijmo.gauge.LinearGauge('#sLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        showText: 'Value'
    });
    var sRadialGauge = new wijmo.gauge.RadialGauge('#sRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        showText: 'Value'
    });
    var sValueInput = new wijmo.input.InputNumber('#sValue', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        step: props.step,
        valueChanged: function (s, e) {
            sLinearGauge.value = s.value;
            sRadialGauge.value = s.value;
        }
    });

    ///////////////////////////////////////////////////////
    // Editing Values
    var evLinearGauge = new wijmo.gauge.LinearGauge('#evLinearGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        isReadOnly: props.isReadOnly,
        step: props.step,
        valueChanged: function (s, e) {
            evRadialGauge.value = s.value;
        }
    });
    var evRadialGauge = new wijmo.gauge.RadialGauge('#evRadialGauge', {
        value: props.value,
        min: props.min,
        max: props.max,
        format: props.format,
        isReadOnly: props.isReadOnly,
        step: props.step,
        valueChanged: function (s, e) {
            evLinearGauge.value = s.value;
        }
    });

    // toggle isReadOnly property
    var isReadOnly = document.getElementById('evReadOnly');
    isReadOnly.checked = props.isReadOnly;
    isReadOnly.addEventListener('click', function (e) {
        var isReadOnly = e.target.checked;
        evLinearGauge.isReadOnly = isReadOnly;
        evRadialGauge.isReadOnly = isReadOnly;
    });


    ///////////////////////////////////////////////////////
    // Custom SVG elements
    var csvgRadialGauge = new wijmo.gauge.RadialGauge('#csvgRadialGauge', {
        min: 0,
        max: 100,
        value: 25,
        startAngle: -45,
        sweepAngle: 270,
        showTicks: true,
        tickSpacing: 10,
        showText: 'Value',
        isReadOnly: false,
        refreshed: updateNeedle,
        valueChanged: updateNeedle
    });

    // update needle element when gauge size or value change
    // rounded (drop-shaped) needle
    function updateNeedle(gauge) {

        // add needle element if necessary
        var needle = gauge.hostElement.querySelector('.needle'),
            cap = gauge.hostElement.querySelector('.cap');
        if (!needle) {
            var svg = gauge.hostElement.querySelector('svg');
            needle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            wijmo.addClass(needle, 'needle');
            svg.appendChild(needle);
            cap = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            wijmo.addClass(cap, 'cap');
            svg.appendChild(cap);
        }

        // update needle parameters
        var args = getArgs(gauge);
        needle.setAttribute('d', wijmo.format('M {lft} {y} A {wid} {wid} 0 0 0 {rgt} {y} L {x} {top} Z', args));
        needle.setAttribute('transform', wijmo.format('rotate({angle} {x} {y})', args));
        cap.setAttribute('cx', args.x);
        cap.setAttribute('cy', args.y);
        cap.setAttribute('r', args.capRadius);
    }

    // get arguments needed for the needle element
    function getArgs(gauge) {
        var rc = gauge.clientSize,
            cx = rc.width / 2,
            cy = rc.height / 2,
            r = Math.min(rc.width, rc.height) / 2,
            wid = r / 10,
            pct = (gauge.value - gauge.min) / (gauge.max - gauge.min),
            angle = gauge.startAngle + gauge.sweepAngle * wijmo.clamp(pct, 0, 1) - 90;
        return {
            angle: angle,
            x: cx.toFixed(4),
            y: cy.toFixed(4),
            wid: wid.toFixed(4),
            capRadius: (wid * 1.2).toFixed(4),
            lft: (cx - wid).toFixed(4),
            rgt: (cx + wid).toFixed(4),
            top: (cy - r).toFixed(4),
            bot: (cy + wid).toFixed(4)
        }
    }
}
