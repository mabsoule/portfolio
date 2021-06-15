//Get time zone hours to determine if it's morning, afternoon or evening
var currentTime = new Date();
var hours = currentTime.getHours();
var text = 'Hi there!';

if (hours >= 0 && hours < 12) {
  // document.getElementById("intro-greeting").innerHTML = 'Good Morning';
  text ='Good Morning 🌸';
  $('a#greeting').addClass('morning');
  $('a#greeting').removeClass('afternoon');
  $('a#greeting').removeClass('evening');
  $('a.logo').addClass('morning');
  $('a.logo').removeClass('afternoon');
  $('a.logo').removeClass('evening');
  $('a.contact').addClass('morning');
  $('a.contact').removeClass('afternoon');
  $('a.contact').removeClass('evening');
  $('a.nav').addClass('morning');
  $('a.nav').removeClass('afternoon');
  $('a.nav').removeClass('evening');
}

if (hours >= 12 && hours < 17) {
  // document.getElementById("intro-greeting").innerHTML = "Good Afternoon";
  text ='Good Afternoon 🌲';
  $('a#greeting').removeClass('morning');
  $('a#greeting').addClass('afternoon');
  $('a#greeting').removeClass('evening');
  $('a.logo').removeClass('morning');
  $('a.logo').addClass('afternoon');
  $('a.logo').removeClass('evening');
  $('a.contact').removeClass('morning');
  $('a.contact').addClass('afternoon');
  $('a.contact').removeClass('evening');
  $('a.nav').removeClass('morning');
  $('a.nav').addClass('afternoon');
  $('a.nav').removeClass('evening');

}

if (hours >= 17 && hours <= 24) {
  // document.getElementById("intro-greeting").innerHTML = "Good Evening";
  text ='Good Evening 🌘';
  $('a#greeting').removeClass('morning');
  $('a#greeting').removeClass('afternoon');
  $('a#greeting').addClass('evening');
  $('a.logo').removeClass('morning');
  $('a.logo').removeClass('afternoon');
  $('a.logo').addClass('evening');
  $('a.contact').removeClass('morning');
  $('a.contact').removeClass('afternoon');
  $('a.contact').addClass('evening');
  $('a.nav').removeClass('morning');
  $('a.nav').removeClass('afternoon');
  $('a.nav').addClass('evening');
}

// Statically add text:
  // document.addEventListener('DOMContentLoaded', newtext(event));
  //
  // function newtext(event){
  //   document.getElementById("greeting").innerHTML = text;
  // };

// Dynamically add text with typeWriter effect:
document.addEventListener('DOMContentLoaded', startAnimation(event));

function startAnimation(event){
  // array with texts to type in typewriter
  var dataText = [text];
  setTimeout(function () {typeWriter(dataText[0], 0)}, 1000);
};

function typeWriter(text, i) { // type one letter/symbol and continue calling itself until the text is finished
   // check if any letters are left
   if (i < (text.length)) {
      // add next character to h1
      document.getElementById("greeting").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1)
      }, 100);
   }
}
