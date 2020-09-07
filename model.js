var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < 2; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var slideIndexy = 1;
showSlidesy(slideIndexy);

// Next/previous controls
function plusSlidesy(n) {
  showSlidesy(slideIndexy += n);
}

// Thumbnail image controls
function currentSlidey(n) {
  showSlidesy(slideIndexy = n);
}

function showSlidesy(n) {
  var i;
  var slidesy = document.getElementsByClassName("mySlidesy");
  if (n > slidesy.length) {slideIndexy = 1}
  if (n < 1) {slideIndexy = slidesy.length}
  for (i = 0; i < 2; i++) {
      slidesy[i].style.display = "none";
  }
  slidesy[slideIndexy-1].style.display = "block";
}

var slideIndexv = 1;
showSlidesv(slideIndexv);

// Next/previous controls
function plusSlidesv(n) {
  showSlidesv(slideIndexv += n);
}

// Thumbnail image controls
function currentSlidev(n) {
  showSlidesv(slideIndexv = n);
}

function showSlidesv(n) {
  var i;
  var slidesv = document.getElementsByClassName("mySlidesv");
  if (n > slidesv.length) {slideIndexv = 1}
  if (n < 1) {slideIndexv = slidesv.length}
  for (i = 0; i < 2; i++) {
      slidesv[i].style.display = "none";
  }
  slidesv[slideIndexv-1].style.display = "block";
}

var slideIndext = 1;
showSlidest(slideIndext);

// Next/previous controls
function plusSlidest(n) {
  showSlidest(slideIndext += n);
}

// Thumbnail image controls
function currentSlidet(n) {
  showSlidest(slideIndext = n);
}

function showSlidest(n) {
  var i;
  var slidest = document.getElementsByClassName("mySlidest");
  if (n > slidest.length) {slideIndext = 1}
  if (n < 1) {slideIndext = slidest.length}
  for (i = 0; i < 2; i++) {
      slidest[i].style.display = "none";
  }
  slidest[slideIndext-1].style.display = "block";
}


var slideIndexc = 1;
showSlidesc(slideIndexc);

// Next/previous controls
function plusSlidesc(n) {
  showSlidesc(slideIndexc += n);
}

// Thumbnail image controls
function currentSlidec(n) {
  showSlidesc(slideIndexc = n);
}

function showSlidesc(n) {
  var i;
  var slidesc = document.getElementsByClassName("mySlidesc");
  if (n > slidesc.length) {slideIndexc = 1}
  if (n < 1) {slideIndexc = slidesc.length}
  for (i = 0; i < 2; i++) {
      slidesc[i].style.display = "none";
  }
  slidesc[slideIndexc-1].style.display = "block";
}


