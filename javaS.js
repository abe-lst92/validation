// function validateForm() {
// var x = document.forms["myForm"]["name"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }







// css
// var movePixels = 10;
// var delayMs = 50;
// var catTimer = null;
// function catWalk() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }
// function startCatWalk() {
//   catTimer = window.setInterval(catWalk, delayMs);
// }
// // Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// function onStartClick() {
// startCatWalk();
// }
// var startButton= document.getElementById('start-button');
// startButton.addEventListener('click', onStartClick);

// function onStopClick(){
//     window.clearInterval(catTimer);
// }

// var stopButton = document.getElementById('stop-button');
// stopButton.addEventListener('click', onStopClick); 

// function onSpeedClick(){
//     movePixels += 5;
//     var speed = movePixels * (1000/50);
//     document.getElementById('info').innerHTML = 'The cat is running:' + speed;
// }

// var speedButton = document.getElementById('speed-button');
// speedButton.addEventListener('click', onSpeedClick);









// forms
// var color = document.getElementById('myForm');
// color.addEventListener('focus', myFocusFunction, true);
// color.addEventListener('blur', myBlurFunction, true);

// function myFocusFunction(){
//     document.getElementById('text').style.backgroundColor = 'skyBlue';
//     document.getElementById('date').style.backgroundColor = 'skyBlue';

// }

// function myBlurFunction(){
//     document.getElementById('text').style.backgroundColor = 'skyBlue';
//     document.getElementById('date').style.backgroundColor = 'skyBlue';

// }






// keyboard events

// var password = document.querySelector('#password');
// var message = document.querySelector('.message');
// password.addEventListener('keyup', function(e) {
//     if(e.getModifierState('CapsLock')){
//         message.textContent = 'Caps lock is on';
//          } else {
//              message.textContent = ' ';

//          }
// });



//focus
// var color= document.getElementById('name')
// addEventListener('focus', (event) => {
//     event.target.style.background = 'skyBlue';
//   }, true);

// addEventListener('blur', (event) => {
//     event.target.style.background = '';
//   }, true);


// mutuations
// var column = document.getElementsByClassName('collapsible');

// for(var i = 0; i < column.length; i++){
//     column[i].addEventListener('click', function(){
//        this.classList.toggle('active');
//         var content = this.nextElementSibling;
//         if(content.style.maxHeight){
//             content.style.maxHeight = null;

//          } else {
//             content.style.maxHeight = content.scrollHeight + 'px';
//          }
//      })
//  }