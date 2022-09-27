// slider items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'))
// number items
var sliderNum = sliderImages.length
// set current slide
var currentSlide = 1;
// get number element
var numSlider = document.getElementById('slider-number')
// next prev slide
var nextButton = document.getElementById('next')
var prevButton = document.getElementById('prev')

nextButton.onclick = nextslide;
prevButton.onclick = prevslide;

function nextslide() {
    console.log('next')
}
function prevslide() {
    console.log('prev')
}
// Add Ul Element
var eleUl = document.createElement('ul');
eleUl.setAttribute('id', 'slide-ul')
// Add li to Ul Element
for (var i = 1; i <= sliderNum; i++) {
    // Add Ul Element
    var childLi = document.createElement('li');
    // Add attr To li
    childLi.setAttribute('data-index', i)
    // Add text(Value) To Li
    childLi.appendChild(document.createTextNode(i))
    // Add li to Ul Element
    eleUl.appendChild(childLi)
}
document.getElementById('indicators').appendChild(eleUl);
// get ul element
var eleCreateUl = document.getElementById('slide-ul')
addActive()
// function Add Class Active And Value Slider
function addActive() {
    // Add Value Slider
    numSlider.textContent = 'slide #' + currentSlide + ' of ' + sliderNum
    // Add Class Active To Li
    eleCreateUl.children[currentSlide - 1].classList.add('active')
    // Add Class Active To Images
    sliderImages[currentSlide - 1].classList.add('active')
}
// console.log(eleCreateUl.children);














