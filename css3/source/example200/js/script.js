// inner variables
var canvas, ctx;
var oHead, oEye, oNose, oMouth;
var iSel = 0;
// -------------------------------------------------------------

// objects :
function Head(x, y, x2, y2, w, h, image) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
    this.h = h;
    this.image = image;
    this.iSpr = 0;
}
function Eye(x, y, x2, y2, w, h, image) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
    this.h = h;
    this.image = image;
    this.iSpr = 0;
}
function Nose(x, y, x2, y2, w, h, image) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
    this.h = h;
    this.image = image;
    this.iSpr = 0;
}
function Mouth(x, y, x2, y2, w, h, image) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
    this.h = h;
    this.image = image;
    this.iSpr = 0;
}
// -------------------------------------------------------------

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // draw head
    ctx.drawImage(oHead.image, oHead.x2 + oHead.iSpr*oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x, oHead.y, oHead.w, oHead.h);

    // draw eyes
    ctx.drawImage(oEye.image, oEye.x2 + oEye.iSpr*oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x, oEye.y, oEye.w, oEye.h);

    // draw nose
    ctx.drawImage(oNose.image, oNose.x2 + oNose.iSpr*oNose.w, oNose.y2, oNose.w, oNose.h, oNose.x, oNose.y, oNose.w, oNose.h);

    // draw mouth
    ctx.drawImage(oMouth.image, oMouth.x2 + oMouth.iSpr*oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x, oMouth.y, oMouth.w, oMouth.h);


    // draw controls
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';

    ctx.font = '30px Verdana';
    if (iSel == 0)
        ctx.font = 'bold 30px Verdana';
    ctx.fillText('< Head >', 400, 80);

    ctx.font = '30px Verdana';
    if (iSel == 1)
        ctx.font = 'bold 30px Verdana';
    ctx.fillText('< Eye >', 400, 180);

    ctx.font = '30px Verdana';
    if (iSel == 2)
        ctx.font = 'bold 30px Verdana';
    ctx.fillText('< Nose >', 400, 280);

    ctx.font = '30px Verdana';
    if (iSel == 3)
        ctx.font = 'bold 30px Verdana';
    ctx.fillText('< Mouth >', 400, 380);
}

// -------------------------------------------------------------

// initialization
$(function(){
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');

    // initialization of dragon
    var oHeadImage = new Image();
    oHeadImage.src = 'images/image.png';
    oHeadImage.onload = function() {};

    oHead = new Head(0, 0, 0, 755, 300, 405, oHeadImage);
    oEye = new Eye(40, 70, 0, 120, 235, 80, oHeadImage);
    oNose = new Nose(70, 120, 0, 276, 180, 140, oHeadImage);
    oMouth = new Mouth(60, 260, 0, 546, 170, 120, oHeadImage);

    $(window).keydown(function(event){ 
        switch (event.keyCode) {
            case 38: // Up key
                iSel--;
                if (iSel < 0) {
                    iSel = 3;
                }
                break;
            case 40: // Up key
                iSel++;
                if (iSel >= 4) {
                    iSel = 0;
                }
                break;
            case 37: // Left key

                // update sprite positions
                if (iSel == 0) {
                    oHead.iSpr--;
                    if (oHead.iSpr < 0) {
                        oHead.iSpr = 3;
                    }
                }
                if (iSel == 1) {
                    oEye.iSpr--;
                    if (oEye.iSpr < 0) {
                        oEye.iSpr = 4;
                    }
                }
                if (iSel == 2) {
                    oNose.iSpr--;
                    if (oNose.iSpr < 0) {
                        oNose.iSpr = 4;
                    }
                }
                if (iSel == 3) {
                    oMouth.iSpr--;
                    if (oMouth.iSpr < 0) {
                        oMouth.iSpr = 4;
                    }
                }
                break;
            case 39: // Right key

                // update sprite positions
                if (iSel == 0) {
                    oHead.iSpr++;
                    if (oHead.iSpr >= 4) {
                        oHead.iSpr = 0;
                    }
                }
                if (iSel == 1) {
                    oEye.iSpr++;
                    if (oEye.iSpr >= 5) {
                        oEye.iSpr = 0;
                    }
                }
                if (iSel == 2) {
                    oNose.iSpr++;
                    if (oNose.iSpr >= 5) {
                        oNose.iSpr = 0;
                    }
                }
                if (iSel == 3) {
                    oMouth.iSpr++;
                    if (oMouth.iSpr >= 5) {
                        oMouth.iSpr = 0;
                    }
                }
                break;

            case 32: // Spacebar key - export results
                var temp_ctx, temp_canvas;
                temp_canvas = document.createElement('canvas');
                temp_ctx = temp_canvas.getContext('2d');
                temp_canvas.width = 360;
                temp_canvas.height = 410;

                // draw head
                temp_ctx.drawImage(oHead.image, oHead.iSpr*oHead.w, oHead.y2, oHead.w, oHead.h, oHead.x, oHead.y, oHead.w, oHead.h);

                // draw eyes
                temp_ctx.drawImage(oEye.image, oEye.iSpr*oEye.w, oEye.y2, oEye.w, oEye.h, oEye.x, oEye.y, oEye.w, oEye.h);

                // draw nose
                temp_ctx.drawImage(oNose.image, oNose.iSpr*oNose.w, oNose.y2, oNose.w, oNose.h, oNose.x, oNose.y, oNose.w, oNose.h);

                // draw mouth
                temp_ctx.drawImage(oMouth.image, oMouth.iSpr*oMouth.w, oMouth.y2, oMouth.w, oMouth.h, oMouth.x, oMouth.y, oMouth.w, oMouth.h);

                var vData = temp_canvas.toDataURL();
                $('#face_result').attr('src', vData);
                break;
        }
    }); 

    setInterval(drawScene, 40); // loop drawScene
});