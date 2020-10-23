$(document).ready(() => {
    var startTime, endTime;

    function start() {
        startTime = new Date();
    };

    function end() {
        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;

        // get seconds 
        var seconds = Math.round(timeDiff);
        console.log(seconds + " seconds");
    }

    

    $.get('/photos', (data) => {
        data.response.forEach(element => {
            var img = document.createElement("img");
            img.src = "/images/" + element;
            img.width = 300
            var imgParent = document.getElementById("test");
            imgParent.appendChild( img );
        })
    })
    
})