
function scrollTrigger(selector, options = {}) {
  //selects all elements with this .class
  //this nodelist is a collection of nodes.its not an array
  let els = document.querySelectorAll(selector);
  // console.log('els as elements gather:',els);
  //makes a shallow copy of array instance or array like object
  els = Array.from(els);
  // console.log('els with Array.from:',els);
  //we will run the addObserver function for every element
  els.forEach((el) => {
    addObserver(el, options);
  })
}

// function addObserver(el, options) {

//
//   let observer = new IntersectionObserver((entries, observer) => {
//
//     entries.forEach((entry) => {
       // if (entry.isIntersecting) {
//
//         entry.target.classList.add('active');
//         if (options.cb)
//
//           observer.unobserve(entry.target)
//       }
//     })
//   }, options);
//
//   observer.observe(el)
// }

function addObserver(el, options){
  // //we use a constructor(blueprint) to make a object of the same kind.
  // //this takes paramaters of a ( function(), and options );

  // //entries just outputs the information related to each element that changes its intersection status.
  if(!('IntersectionObserver' in window)) {
  // Simple fallback
  // The animation/callback will be called immediately so
  // the scroll animation doesn't happen on unsupported browsers
  if(options.cb){
    options.cb(el)
  } else{
    entry.target.classList.add('active')
  }
  // We don't need to execute the rest of the code
  return
}

  let observer = new IntersectionObserver((entries, observer) => {
    // //In our code we are looping through all the elements in the entries array. This array just lists all the elements we are observing that have had their intersection status change. This means that the element has either entered or left the screen. We are then looping through those entries and for each one we are checking the isIntersecting property. This property is true if the element is on the page and it is false if the element is not on the page. Finally, we are using the target property of our entry to get the current element that is being observed and changing its background to the appropriate color.
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if(options.cb) {
          // If we've passed a callback function, we'll call it
          options.cb(el)
        } else{
          // If we haven't, we'll just add the active class
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}

scrollTrigger('.slog', {rootMargin: '-80px'});
scrollTrigger('.service-align', {rootMargin: '-80px'});

//modal
let galleryImage = document.querySelectorAll(".gallery-img");
let modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

galleryImage.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src= elem.src;
  })
})

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//year
let currentTime= new Date();
document.querySelector(".year").innerHTML= currentTime.getFullYear();
