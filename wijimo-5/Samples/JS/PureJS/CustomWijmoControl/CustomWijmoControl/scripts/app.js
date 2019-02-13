onload = function () {

    // create first control, set caption
    var ctl = new MyControl('#myControl', {
        caption: 'this is the first control',
        buttonClicked: function (sender, args) {
            alert('thanks for clicking the button in the first control');
        }
    });

    // create another control, set caption
    ctl = new MyControl('#myOtherControl', {
        caption: 'this is the second control',
        buttonClicked: function (sender, args) {
            alert('thanks for clicking the button in the second control');
        }
    });
}