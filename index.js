document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;
    
    document.getElementById('ball').style.left = newPosition + "px" ;

});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + "px" ;
});


function changeBackground(){

    var backgroundImage = document.getElementById('background').style.background;
    
    console.log(backgroundImage);
     
    if (backgroundImage == 'url("background.jpg")' || backgroundImage == ''){
        document.getElementById('background').style.background =  "url('shreq.jpg')";
        backgroundImage = 'url("shreq.jpg")';
    }
    else if (backgroundImage == 'url("shreq.jpg")'){
        document.getElementById('background').style.background = "url('background.jpg')";
        backgroundImage = 'url("background.jpg")';
    }
}