const blurelwraper = document.querySelector('.feedback__blur'),
      blurelem = document.querySelector('.feedback__blur-elem'),
      formelem = document.querySelector('.feedback-form');

const width = getComputedStyle(formelem).width;
const height = getComputedStyle(formelem).height;

blurelwraper.style.width = width;
blurelwraper.style.height = height;

const reviewsbg = document.querySelector('.reviews');
const bgwidth = getComputedStyle(reviewsbg).width;

blurelem.style.backgroundSize = bgwidth;

var blur = (function () {
    
    return {
        set: function (){
            var posLeft = -blurelwraper.offsetLeft,
                posTop = -blurelwraper.offsetTop,
                blurCSS = blurelem.style;
            
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`
        }
    }
})();

blur.set();
window.onresize = function(){
    blur.set();
}
