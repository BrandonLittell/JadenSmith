//'use strict';

angular.module('jadenSmithApp')
.service('generateImage', ['getHex', 'invertColor', 'getInverseColor', function(getHex, invertColor, getX, getInverseColor) {
    
    function getFontSize(tweetText){
        if(tweetText.length < 60) 180 - tweetText.length;
        else if (tweetText.length < 80) 160 - tweetText.length;
        else if (tweetText.length < 100) 130 - tweetText.length;
        else 120 - tweetText.length;
    }

    function genCSS(fontSize, justify, align){
        return "{'font-size': " + fontSize + ",'text-align': '" + justify + "','vertical-align': '" + align + "'}";
    }
    return function(tweetText, imageSrc, authorText, justify, align) {
        var fontSize = getFontSize(tweetText);
        var imageObj = {};
        imageObj.css = genCSS(fontSize, justify, align);
        imageObj.tweet = tweetText;
        imageObj.image = imageSrc;
        imageObj.author = authorText;
        imageObj.justify = justify;
        imageObj.alignment = align; 
        return imageObj;
    };
}]);

