var promoCode = '';
var bg1 = 'images/400.png';
var bg2 = 'images/500.png';
var bg3 = 'images/sorry.png';
var bgArray= [ bg1, bg2, bg3 ],
selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];

if (selectBG == bg1) {
    promoCode = 'SCRATCH400';
  } else if (selectBG == bg2) {
    promoCode = 'SCRATCH500';
  } if (selectBG == bg3) {
    var promoCode = '';
  }
$('#promo').wScratchPad({
    // the size of the eraser
    size        : 70,    
    // the randomized scratch image   
    bg:  selectBG,
    // give real-time updates
    realtime    : true, 
    // The overlay image
    fg: 'images/overlay.png',
    // The cursor (coin) image
    'cursor': 'url("images/coin1.png") 5 5, default',
    
    scratchMove: function (e, percent) {
        // Show the plain-text promo code and call-to-action when the scratch area is 50% scratched
        if ((percent > 50) && (promoCode != '')) {
          $('.promo-container').show();
          $('body').removeClass('not-selectable');
          $('.promo-code').html('your code is: ' + promoCode);
        }
      }
 });