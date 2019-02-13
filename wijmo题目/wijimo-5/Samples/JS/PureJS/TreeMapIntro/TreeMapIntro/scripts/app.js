onload = function () {

    // initialize tabs used to show the source code
    var tabSrc = document.querySelectorAll('.tab-source');
    for (var i = 0; i < tabSrc.length; i++) {
        new wijmo.nav.TabPanel(tabSrc[i]);
    }

    // show menu header and current value
    function updateMenuHeader(menu, header) {
        menu.header = header
            ? header + ': <b>' + menu.text + '</b>'
            : menu.text;
    }

    // generate data for the sample
    var categories = ['Beverages', 'Condiments', 'Confections', 'Dairy Products', 'Grains/Cereals', 'Meat/Poultry', 'Produce', 'Seafood'];
    var subCategories = [
        ['Soft drinks', 'Coffees', 'Teas', 'Beers', 'Ales'],
        ['Sweet and Savory sauces', 'Relishes', 'Spreads', 'Seasonings'],
        ['Desserts', 'Candies', 'Sweet breads'],
        ['Cheeses'],
        ['Breads', 'Crackers', 'Pasta', 'Cereal'],
        ['Prepared meats'],
        ['Dried fruit', 'Bean curd'],
        ['Seaweed', 'Fish']
    ];
    function getSales() {
        return Math.round(Math.random() * 100);
    }
    function getData() {
        var data = [];
        categories.forEach(function (category, index) {
            subCategories[index].forEach(function (subCategory) {
                data.push({
                    category: category,
                    subCategory: subCategory,
                    sales: getSales()
                });
            });
        });
        return data;
    }
    function getGroupCVData() {
        var data = [];
        for (var i = 0; i < 1000; i++) {
            var catIndex = Math.floor(Math.random() * categories.length),
                subCategory = subCategories[catIndex],
                subIndex = Math.floor(Math.random() * subCategory.length);
            data.push({
                category: categories[catIndex],
                subCategory: subCategory[subIndex],
                sales: getSales()
            });
        }
        var cv = new wijmo.collections.CollectionView(data);
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('category'));
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('subCategory'));
        return cv;
    }
    function getMaxDepthData() {
        var data = [
            {
                type: 'Music', items: [
                    {
                        type: 'Country', items: [
                            { type: 'Classic Country', sales: getSales() },
                            { type: 'Cowboy Country', sales: getSales() },
                            { type: 'Outlaw Country', sales: getSales() },
                            { type: 'Western Swing', sales: getSales() },
                            { type: 'Roadhouse Country', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Rock', items: [
                            { type: 'Hard Rock', sales: getSales() },
                            { type: 'Blues Rock', sales: getSales() },
                            { type: 'Funk Rock', sales: getSales() },
                            { type: 'Rap Rock', sales: getSales() },
                            { type: 'Guitar Rock', sales: getSales() },
                            { type: 'Progressive Rock', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Classical', items: [
                            { type: 'Symphonies', sales: getSales() },
                            { type: 'Chamber Music', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Soundtracks', items: [
                            { type: 'Movie Soundtracks', sales: getSales() },
                            { type: 'Musical Soundtracks', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Jazz', items: [
                            { type: 'Smooth Jazz', sales: getSales() },
                            { type: 'Vocal Jazz', sales: getSales() },
                            { type: 'Jazz Fusion', sales: getSales() },
                            { type: 'Swing Jazz', sales: getSales() },
                            { type: 'Cool Jazz', sales: getSales() },
                            { type: 'Traditional Jazz', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Electronic', items: [
                            { type: 'Electronica', sales: getSales() },
                            { type: 'Disco', sales: getSales() },
                            { type: 'House', sales: getSales() }
                        ]
                    }
                ]
            },
            {
                type: 'Video', items: [
                    {
                        type: 'Movie', items: [
                            { type: 'Kid & Family', sales: getSales() },
                            { type: 'Action & Adventure', sales: getSales() },
                            { type: 'Animation', sales: getSales() },
                            { type: 'Comedy', sales: getSales() },
                            { type: 'Drama', sales: getSales() },
                            { type: 'Romance', sales: getSales() }
                        ]
                    },
                    {
                        type: 'TV', items: [
                            { type: 'Science Fiction', sales: getSales() },
                            { type: 'Documentary', sales: getSales() },
                            { type: 'Fantasy', sales: getSales() },
                            { type: 'Military & War', sales: getSales() },
                            { type: 'Horror', sales: getSales() }
                        ]
                    }
                ]
            },
            {
                type: 'Books', items: [
                    {
                        type: 'Arts & Photography', items: [
                            { type: 'Architecture', sales: getSales() },
                            { type: 'Graphic Design', sales: getSales() },
                            { type: 'Drawing', sales: getSales() },
                            { type: 'Photography', sales: getSales() },
                            { type: 'Performing Arts', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Children\'s Books', items: [
                            { type: 'Beginning Readers', sales: getSales() },
                            { type: 'Board Books', sales: getSales() },
                            { type: 'Chapter Books', sales: getSales() },
                            { type: 'Coloring Books', sales: getSales() },
                            { type: 'Picture Books', sales: getSales() },
                            { type: 'Sound Books', sales: getSales() }
                        ]
                    },
                    {
                        type: 'History', items: [
                            { type: 'Ancient', sales: getSales() },
                            { type: 'Medieval', sales: getSales() },
                            { type: 'Renaissance', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Mystery', items: [
                            { type: 'Mystery', sales: getSales() },
                            { type: 'Thriller & Suspense', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Romance', items: [
                            { type: 'Action & Adventure', sales: getSales() },
                            { type: 'Holidays', sales: getSales() },
                            { type: 'Romantic Comedy', sales: getSales() },
                            { type: 'Romantic Suspense', sales: getSales() },
                            { type: 'Western', sales: getSales() },
                            { type: 'Historical', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Sci-Fi & Fantasy', items: [
                            { type: 'Fantasy', sales: getSales() },
                            { type: 'Gaming', sales: getSales() },
                            { type: 'Science Fiction', sales: getSales() }
                        ]
                    }
                ]
            },
            {
                type: 'Electronics', items: [
                    {
                        type: 'Camera', items: [
                            { type: 'Digital Cameras', sales: getSales() },
                            { type: 'Film Photography', sales: getSales() },
                            { type: 'Lenses', sales: getSales() },
                            { type: 'Video', sales: getSales() },
                            { type: 'Accessories', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Headphones', items: [
                            { type: 'Earbud headphones', sales: getSales() },
                            { type: 'Over-ear headphones', sales: getSales() },
                            { type: 'On-ear headphones', sales: getSales() },
                            { type: 'Bluetooth headphones', sales: getSales() },
                            { type: 'Noise-cancelling headphones', sales: getSales() },
                            { type: 'Audiophile headphones', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Cell Phones', items: [
                            { type: 'Cell Phones', sales: getSales() },
                            {
                                type: 'Accessories', items: [
                                    { type: 'Batteries', sales: getSales() },
                                    { type: 'Bluetooth Headsets', sales: getSales() },
                                    { type: 'Bluetooth Speakers', sales: getSales() },
                                    { type: 'Chargers', sales: getSales() },
                                    { type: 'Screen Protectors', sales: getSales() }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'Wearable Technology', items: [
                            { type: 'Activity Trackers', sales: getSales() },
                            { type: 'Smart Watches', sales: getSales() },
                            { type: 'Sports & GPS Watches', sales: getSales() },
                            { type: 'Virtual Reality Headsets', sales: getSales() },
                            { type: 'Wearable Cameras', sales: getSales() },
                            { type: 'Smart Glasses', sales: getSales() }
                        ]
                    }
                ]
            },
            {
                type: 'Computers & Tablets', items: [
                    {
                        type: 'Desktops', items: [
                            { type: 'All-in-ones', sales: getSales() },
                            { type: 'Minis', sales: getSales() },
                            { type: 'Towers', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Laptops', items: [
                            { type: '2 in 1 laptops', sales: getSales() },
                            { type: 'Traditional laptops', sales: getSales() }
                        ]
                    },
                    {
                        type: 'Tablets', items: [
                            { type: 'iOS', sales: getSales() },
                            { type: 'Android', sales: getSales() },
                            { type: 'Fire OS', sales: getSales() },
                            { type: 'Windows', sales: getSales() }
                        ]
                    }
                ]
            }
        ];
        return data;
    }


    /////////////////////////////////////////////////////////////////
    // Getting Started
    var introChart = new wijmo.chart.hierarchical.TreeMap('#introChart', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });


    /////////////////////////////////////////////////////////////////
    // Grouped CollectionView
    var groupCVChart = new wijmo.chart.hierarchical.TreeMap('#groupCVChart', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getGroupCVData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });


    /////////////////////////////////////////////////////////////////
    // Type
    var typeChart = new wijmo.chart.hierarchical.TreeMap('#typeChart', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });

    // change chart type
    var typeMenu = new wijmo.input.Menu('#typeMenu', {
        itemClicked: function (s, e) {
            typeChart.type = parseInt(s.selectedValue);
            updateMenuHeader(s, 'Type');
        }
    });
    updateMenuHeader(typeMenu, 'Type');


    /////////////////////////////////////////////////////////////////
    // Max Depth
    var maxDepthChart = new wijmo.chart.hierarchical.TreeMap('#maxDepthChart', {
        maxDepth: 2,
        binding: 'sales',
        bindingName: 'type',
        childItemsPath: 'items',
        itemsSource: getMaxDepthData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        }
    });

    // change chart's maxDepth property
    var maxDepth = new wijmo.input.InputNumber('#maxDepth', {
        min: 0,
        max: 4,
        step: 1,
        format: 'n0',
        valueChanged: function (s, e) {
            if (s.value >= s.min && s.value <= s.max) {
                maxDepthChart.maxDepth = s.value;
            }
        },
        value: maxDepthChart.maxDepth
    });


    /////////////////////////////////////////////////////////////////
    // Theming
    var themeChart1 = new wijmo.chart.hierarchical.TreeMap('#themeChart1', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        },
        palette: [
            { titleColor: '#00277d', maxColor: 'rgba(0,39,125,0.7)', minColor: 'rgba(168,187,230,0.7)' },
            { titleColor: '#7d1f00', maxColor: 'rgba(125,21,0,0.7)', minColor: 'rgba(230,183,168,0.7)' },
            { titleColor: '#007d27', maxColor: 'rgba(0,125,39,0.7)', minColor: 'rgba(168,230,188,0.7)' },
            { titleColor: '#7d003c', maxColor: 'rgba(125,0,60,0.7)', minColor: 'rgba(230,168,198,0.7)' },
            { titleColor: '#7d4300', maxColor: 'rgba(125,67,0,0.7)', minColor: 'rgba(230,201,168,0.7)' },
            { titleColor: '#51007d', maxColor: 'rgba(81,0,125,0.7)', minColor: 'rgba(209,170,230,0.7)' },
            { titleColor: '#7d7400', maxColor: 'rgba(125,116,0,0.7)', minColor: 'rgba(230,226,168,0.7)' },
            { titleColor: '#970000', maxColor: 'rgba(151,0,0,0.7)', minColor: 'rgba(230,169,169,0.7)' }
        ]
    });
    var themeChart2 = new wijmo.chart.hierarchical.TreeMap('#themeChart2', {
        binding: 'sales',
        bindingName: ['category', 'subCategory'],
        itemsSource: getData(),
        dataLabel: {
            position: 'Center',
            content: '{name}'
        },
        palette: [
            '#88bde6', '#fbb258', '#90cd97', '#f6aac9', '#bfa554', '#bc99c7', '#eddd46', '#f07e6e', '#8c8c8c'
        ]
    });
}