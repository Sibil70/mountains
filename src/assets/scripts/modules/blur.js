const blurElWraper = document.querySelector('.feedback__blur'),
      blurElem = document.querySelector('.feedback__blur-elem'),
      formElem = document.querySelector('.feedback-form'),
      reviewsBg = document.querySelector('.reviews');

let width = getComputedStyle(formElem).width;
let height = getComputedStyle(formElem).height;

blurElWraper.style.width = width;
blurElWraper.style.height = height;


let bgWidth = getComputedStyle(reviewsBg).width;
let bgHeight = getComputedStyle(reviewsBg).height;

blurElem.style.backgroundSize = bgWidth;

var blur = (function () {
    
    return {
        set: function (){
            var posLeft = -blurElWraper.offsetLeft,
                posTop = -blurElWraper.offsetTop,
                imgWidth = bgWidth,
                imgHeight = bgHeight,
                blurCSS = blurElem.style;
            
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
            blurCSS.backgroundSize = `${imgWidth}px ${imgHeight}px`;

        }
    }
})();

blur.set();
window.onresize = function(){
    blur.set();
}
