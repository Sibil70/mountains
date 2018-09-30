'use strict';

const getUrl = (function(){
    // const arr = [];
    const hash = window.location.href.slice(window.location.href.indexOf('?')+1).split();
    console.log(hash);

    for (let i = 0; i<hash.length; i++) {
            if (hash [i] === 'auth') {
        var card = document.querySelector('.user--front');
                card.classList.add('js-toggle');
        var cardBack = document.querySelector('.user--back');
                cardBack.classList.remove('js-toggle');
            }
console.log(card, cardBack)


        // arr.push(hash[i]);
    }

    // if (arr.length > 0) {

    // }

})();

module.exports = getUrl;