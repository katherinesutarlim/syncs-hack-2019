// Grab elements, create settings, etc.
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
//
// var reference = new Image();   // Create new img element
// reference.src = 'processing/straight.jpg'
//
// var recent = new Image();   // Create new img element
// recent.src = 'processing/slouch.jpg'
// //
// // ctx.fillStyle = 'green';
// // ctx.fillRect(10, 10, 150, 100);
//
// reference.addEventListener('load', function() {
//   ctx.drawImage(reference, 0, 0);
// }, false);
//
// recent.addEventListener('load', function() {
//   ctx.drawImage(recent, 0, 0);
// }, false);
//
// var image_data = ctx.getImageData(0, 0, 1280, 720);
