onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // data for AutoComplete, ComboBox, and ListBox
    var data = {
        countries: [
            'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua', 'Argentina', 'Armenia',
            'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
            'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
            'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands',
            'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote D'Ivoire",
            'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador',
            'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland',
            'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar',
            'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras',
            'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan',
            'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
            'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives',
            'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco',
            'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands', 'Nevis',
            'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island',
            'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico',
            'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius',
            'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Saudi Arabia', 'Scotland',
            'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
            'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania',
            'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda',
            'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State',
            'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (USA)', 'Wake Island', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
        ],
        cities: [
            "Abidjan", "Accra", "Ahmedabad", "Alexandria", "Ankara", "Atlanta", "Baghdad", "Bandung", "Bangkok", "Barcelona", "Beijing", "Belo Horizonte",
            "Bengaluru", "Bogota", "Boston", "Buenos Aires", "Cairo", "Calcutta", "Chengdu", "Chennai", "Chicago", "Chongqung", "Dalian", "Dallas", "Delhi",
            "Detroit", "Dhaka", "Dongguan", "Essen", "Fuzhou", "Guadalajara", "Guangzhou", "Hangzhou", "Harbin", "Ho Chi Minh City", "Hong Kong", "Houston",
            "Hyderabad", "Istanbul", "Jakarta", "Johannesburg", "Karachi", "Khartoum", "Kinshasa", "Kuala Lumpur", "Lagos", "Lahore", "Lima", "London",
            "Los Angeles", "Luanda", "Madrid", "Manila", "Medellin", "Mexico City", "Miami", "Milan", "Monterrey", "Moscow", "Mumbai", "Nagoya", "Nanjing",
            "Naples", "New York", "Osaka", "Paris", "Pheonix", "Philadelphia", "Porto Alegre", "Pune", "Qingdao", "Quanzhou", "Recife", "Rio de Janeiro",
            "Riyadh", "Rome", "Saint Petersburg", "Salvador", "San Francisco", "Santiago", "Sao Paulo", "Seoul", "Shanghair", "Shenyang", "Shenzhen",
            "Singapore", "Surabaya", "Surat", "Suzhou", "Sydney", "Taipei", "Tehran", "Tianjin", "Toronto", "Washington", "Wuhan", "Xi'an-Xianyang", "Yangoon",
            "Zhengzhou", "Tokyo"
        ]
    };

    ////////////////////////////////////////////////////////////////////////
    // Getting Started
    var inputNumber = new wijmo.input.InputNumber('#gsInputNumber', {
        value: 3.5,
        step: 0.5,
        format: 'n2'
    });


    ////////////////////////////////////////////////////////////////////////
    // AutoComplete
    var autoComplete1 = new wijmo.input.AutoComplete('#acAutoComplete1', {
        itemsSource: data.countries
    });
    var autoComplete2 = new wijmo.input.AutoComplete('#acAutoComplete2', {
        itemsSource: data.countries,
        cssMatch: 'highlight' // CSS class for custom highlighting
    });


    ////////////////////////////////////////////////////////////////////////
    // ComboBox
    var comboBox1 = new wijmo.input.ComboBox('#cbComboBox1', {
        isEditable: false,
        itemsSource: data.countries
    });
    var comboBox2 = new wijmo.input.ComboBox('#cbComboBox2', {
        isEditable: true,
        itemsSource: data.countries
    });


    ////////////////////////////////////////////////////////////////////////
    // InputDate and Calendar
    var today = new Date(),
        minDate = new Date(today.getFullYear(), 0, 1),
        maxDate = new Date(today.getFullYear(), 11, 31);
    var inputDate = new wijmo.input.InputDate('#idcInputDate', {
        value: today,
        min: minDate,
        max: maxDate
    });
    var calendar = new wijmo.input.Calendar('#idcCalendar', {
        value: today,
        min: minDate,
        max: maxDate
    });

    // show date range values below the example
    var format = 'MMM d, yyyy';
    document.getElementById('idcMinDate').textContent = wijmo.Globalize.format(minDate, format);
    document.getElementById('idcMaxDate').textContent = wijmo.Globalize.format(maxDate, format);


    ////////////////////////////////////////////////////////////////////////
    // InputDate and InputTime
    var inputDate = new wijmo.input.InputDate('#iditInputDate', {
        valueChanged: valueChanged,
        min: new Date(today.getFullYear(), 0, 1),
        max: new Date(today.getFullYear(), 11, 31),
        format: 'MMM dd, yyyy'
    });
    var inputTime = new wijmo.input.InputTime('#iditInputTime', {
        valueChanged: valueChanged,
        min: new Date(0, 0, 0, 7, 0, 0, 0),
        max: new Date(0, 0, 0, 19, 0, 0, 0),
        step: 15
    });
    valueChanged();

    // valueChanged event handler
    function valueChanged() {
        if (inputDate && inputTime) {

            // merge date and time values
            var val = wijmo.DateTime.fromDateTime(inputDate.value, inputTime.value);

            // format and display the new date
            var dateTime = wijmo.Globalize.format(val, 'MMM dd, yyyy h:mm:ss tt');
            document.getElementById('iditSelectedValue').textContent = dateTime;
        }
    }


    ////////////////////////////////////////////////////////////////////////
    // ListBox
    var listBox = new wijmo.input.ListBox('#lbListBox', {
        selectedIndexChanged: function (s, e) {
            document.getElementById('lbSelIdx').textContent = s.selectedIndex;
            document.getElementById('lbSelVal').textContent = s.selectedValue;
        },
        itemsSource: data.cities
    });


    ////////////////////////////////////////////////////////////////////////
    // InputNumber
    var inputNumber1 = new wijmo.input.InputNumber('#inInputNumber1', {
        value: 0,
        format: 'n0'
    });
    var inputNumber2 = new wijmo.input.InputNumber('#inInputNumber2', {
        value: Math.PI,
        format: 'n'
    });
    var inputNumber3 = new wijmo.input.InputNumber('#inInputNumber3', {
        value: 3.5,
        format: 'c2',
        step: 0.5,
        min: 0,
        max: 10
    });
    var inputNumber4 = new wijmo.input.InputNumber('#inInputNumber4', {
        placeholder: 'Enter a number...',
        isRequired: false,
        value: null
    });


    ////////////////////////////////////////////////////////////////////////
    // InputMask

    // simple masks
    var socialSecurity = new wijmo.input.InputMask('#imSocial', {
        mask: '000-00-0000'
    });
    var phoneNumber = new wijmo.input.InputMask('#imPhone', {
        mask: '(999) 000-0000'
    });

    // try custom masks
    var customMaskTrial = new wijmo.input.InputMask('#imCustomTrial', {
        isRequired: false,
        placeholder: 'Try your input mask...'
    });
    var customMaskInput = new wijmo.input.InputMask('#imCustomInput', {
        valueChanged: function (s, e) {
            customMaskTrial.mask = s.value;
            customMaskTrial.hostElement.title = 'Mask: ' + (s.value || 'N/A');
        },
        isRequired: false,
        placeholder: 'Enter an input mask...',
        value: null
    });

    // use masks with input date and time controls
    var inputDate = new wijmo.input.InputDate('#imInputDate', {
        format: 'MM/dd/yyyy',
        mask: '99/99/9999'
    });
    var inputTime = new wijmo.input.InputTime('#imInputTime', {
        format: 'hh:mm tt',
        step: 15,
        isEditable: true,
        mask: '00:00 >LL'
    });


    ////////////////////////////////////////////////////////////////////////
    // Menu

    // simple menus with a common itemClicked handler
    var fileMenu = new wijmo.input.Menu('#mFileMenu', {
        header: 'File',
        itemClicked: itemClicked
    });
    var editMenu = new wijmo.input.Menu('#mEditMenu', {
        header: 'Edit',
        itemClicked: itemClicked
    });
    function itemClicked(s, e) {
        alert(wijmo.format('You selected option {selectedIndex} from the {header} menu!', s));
    }

    // start with a 7% tax value
    var inputNumber = new wijmo.input.InputNumber('#mInputNumber', {
        value: 0.07,
        step: 0.05,
        format: 'p0',
        min: 0,
        max: 1
    });

    // use a command-based menu to update the tax
    var cmdMenu = new wijmo.input.Menu('#mCmdMenu', {
        header: 'Chance Tax',
        command: {
            executeCommand: function (arg) {
                arg = wijmo.changeType(arg, wijmo.DataType.Number);
                if (wijmo.isNumber(arg)) {
                    inputNumber.value += arg;
                }
            },
            canExecuteCommand: function (arg) {
                arg = wijmo.changeType(arg, wijmo.DataType.Number);
                if (wijmo.isNumber(arg)) {
                    var val = inputNumber.value + arg;
                    return val >= 0 && val <= 1;
                }
                return false;
            }
        }
    });
}
