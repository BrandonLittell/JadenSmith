'use strict';

angular.module('jadenSmithApp')
.factory('getImages', ['$resource', function($resource) {
    return function(){
        console.log("Searching for images");
        var imageList;
        var refresh = (new Date().getTime() - localStorage.getItem("timestamp")) >= 900000;
        console.log("image page number  " + localStorage.getItem("pageNumber"));
        if (!localStorage.getItem("pageNumber") || refresh) { 
            localStorage.setItem("pageNumber", "0");
            localStorage.setItem("timestamp", new Date().getTime());
            console.log("Page number reset");
        }
        else {
            var newPageNumber = localStorage.getItem("pageNumber");
            newPageNumber++;
            // take out in production
            // newPageNumber = newPageNumber > 5 ? 0 : newPageNumber;
            localStorage.setItem("pageNumber", newPageNumber.toString());
        }
        imageList = $resource("/api/images?page=" + localStorage.getItem("pageNumber")).get();
        
        return imageList.$promise.then(function (result) {
            return Object.keys(result.images).map(function(k){return result.images[k]});
        });    
    }
}]);

