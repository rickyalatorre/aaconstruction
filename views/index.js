
// function scrollTrigger(selector, options = {}) {
//   //get all elements,turn into an array
//   let els = document.querySelectorAll(selector);
//   els = Array.from(els);
//   els.forEach((el) => {
//     addObserver(el, options);
//   })
// }
// //options is your ability to recognize the bird(root).
// //rootMargin is your ability to see how centered the bird is on telescope.
// //threshold is your ability to notice its 100% visible.
// function addObserver(el, options) {
//   //my understanding is this is an instance of an api that is already in JS
//   //think of the observer as the telescope. The telescope has the ability to be picked up and watch
//   //a bird or switch to different birds. When we use observe(),its like making the decision to pick
//   //up the telescope and use it.
//   let observer = new IntersectionObserver((entries, observer) => {
//     //entries is an array and we will iterate over it.
//     entries.forEach((entry) => {
//       //if the entry is in view then we will target it and give it an active
//       if (entry.isIntersecting) {
//         //classList helps us add or remove a class.
//         entry.target.classList.add('active');
//         if (options.cb)
//           // We are removing the observer from the element after adding the active class
//           observer.unobserve(entry.target)
//       }
//     })
//   }, options);
//   // Adding the observer to the element
//   observer.observe(el)
// }
// //rootMargin is like your ability to decide if a bird is centered in your vision with a telescope.
// //so rootMargin is compared to actuall css margin. Margin at negative can consume other divs since it gives space
// //instead of push out more space.
// scrollTrigger('.slog', {rootMargin: '-80px'});
// scrollTrigger('.service-align', {rootMargin: '-80px'});
// //MODAL
// //i will need to be able to click on image and that opens up a window that is fullscreen/fixed
// //add an event first to see if it will read
// let galleryImage = document.querySelectorAll(".gallery-img");
// let modal = document.getElementById("myModal");
// var modalImg = document.getElementById("img01");
//
// galleryImage.forEach((elem, index) => {
//   elem.addEventListener('click', () => {
//     modal.style.display = "block";
//     modalImg.src= elem.src;
//   })
// })
//
// let span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }
