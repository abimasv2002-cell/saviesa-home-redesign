// console.log("Saviesa Home Redesign Loaded");
// const slides = document.querySelectorAll(".slide");

// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// let currentSlide = 0;

// function showSlide(index){

//   slides.forEach((slide)=>{
//     slide.classList.remove("active");
//   });

//   slides[index].classList.add("active");
// }

// nextBtn.addEventListener("click", ()=>{

//   currentSlide++;

//   if(currentSlide >= slides.length){
//     currentSlide = 0;
//   }

//   showSlide(currentSlide);
// });

// prevBtn.addEventListener("click", ()=>{

//   currentSlide--;

//   if(currentSlide < 0){
//     currentSlide = slides.length - 1;
//   }

//   showSlide(currentSlide);
// });

// setInterval(()=>{

//   currentSlide++;

//   if(currentSlide >= slides.length){
//     currentSlide = 0;
//   }

//   showSlide(currentSlide);

// }, 4000);
/* IMAGE SLIDER */

const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", ()=>{

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevBtn.addEventListener("click", ()=>{

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});

setInterval(()=>{

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 4000);

function toggleMenu(){
  document.getElementById("navLinks")
          .classList.toggle("show");
}

/* POPUP FORM */

const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const popupForm = document.getElementById("popupForm");

openForm.addEventListener("click", ()=>{

  popupForm.style.display = "flex";

});

closeForm.addEventListener("click", ()=>{

  popupForm.style.display = "none";

});


window.addEventListener("click", (e)=>{

  if(e.target === popupForm){

    popupForm.style.display = "none";
  }

});


/* FORM SUBMIT */

const consultForm = document.getElementById("consultForm");
const successMessage = document.getElementById("successMessage");

consultForm.addEventListener("submit", (e)=>{

  e.preventDefault();

  successMessage.style.display = "block";

  consultForm.reset();

});
