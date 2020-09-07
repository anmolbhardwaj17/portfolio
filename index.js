var text = ["Anmol Bhardwaj", "अनमोल भारद्वाज", "انمول بھردواج", "안몰 바드와 즈"];
var counter = 0;
var elem = document.getElementById("hello");
var inst = setInterval(change, 800);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}



var typed = new Typed('.type', {
  strings: ["Web Developer and UX/UI Enthusiast"],
  typeSpeed: 30
});

var controller = new ScrollMagic.Controller();

var selected1 = new ScrollMagic.Scene({
  triggerElement: '.work-top',
  offset: -150
})
.setClassToggle('.work-top', 'show')
.addTo(controller);

var workh1 = new ScrollMagic.Scene({
  triggerElement: '.work h1',
  offset: -150
})
.setClassToggle('.work h1', 'show')
.addTo(controller);

var protop = new ScrollMagic.Scene({
  triggerElement: '.project-top',
  offset: -150
})
.setClassToggle('.project-top', 'show2')
.addTo(controller);

var proh1 = new ScrollMagic.Scene({
  triggerElement: '.projects h1',
  offset: -150
})
.setClassToggle('.projects h1', 'show2')
.addTo(controller);

var abtop = new ScrollMagic.Scene({
  triggerElement: '.about-top',
  offset: -150
})
.setClassToggle('.about-top', 'show3')
.addTo(controller);

var abtop = new ScrollMagic.Scene({
  triggerElement: '.about h1',
  offset: -150
})
.setClassToggle('.about h1', 'show3')
.addTo(controller);

mybutton = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


