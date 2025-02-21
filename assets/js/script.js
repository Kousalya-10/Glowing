// swiper in single class page
/*  window.addEventListener("load", function() {
    let images = document.querySelectorAll("#hero .home");
    let index = 0;

    setInterval(() => {
      images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }, 3000); 
});*/

let CurrentSlider=0
ShowSlider(CurrentSlider)
let clearInterval=setInterval(automoveslide,4000)

function ShowSlider(index){
    let slides=document.getElementsByClassName('slide')

    if(index>=slides.length){
        CurrentSlider=0
    }
    else if(index<0){
        CurrentSlider=slides.length-1
    }
    else{
        CurrentSlider=index
    }

     for(i=0;i<slides.length;i++){
        slides[i].style.display='none'
    }
    slides[CurrentSlider].style.display='block'
}

function automoveslide(){
    ShowSlider(CurrentSlider + 1)
}


// swiper for shop

            const swiper = new Swiper('.swiper', {
            slidesPerView: 4, 
            spaceBetween: 20, 
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: {
              delay: 2000, 
              disableOnInteraction: false,
            },
            breakpoints: {
              220: {
                slidesPerView: 1, 
                spaceBetween: 10,
              },
              570: {
                slidesPerView: 2, 
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4, 
                spaceBetween: 20,
              },
            },
          });


// contdown clock

/*let hrs=document.getElementById('hrs')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

    setInterval(()=>{
      let currentTime=new Date()

      hrs.textContent=(currentTime.getHours()<10?'0':'')+currentTime.getHours()
      min.textContent=(currentTime.getMinutes()<10?'0':'')+currentTime.getMinutes()
      sec.textContent=(currentTime.getSeconds()<10?'0':'')+currentTime.getSeconds()
    },1000)
*/

// Set the date for the offer expiration
const offerEndDate = new Date("Feb 25, 2025 23:59:59").getTime();

const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hrs");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");

// Update the countdown every 1 second
const updateCountdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the remaining time
  const remainingTime = offerEndDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the result
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  // If the countdown is finished, display a message and stop the interval
  if (remainingTime <= 0) {
    clearInterval(updateCountdown);
    countdownElement.textContent = "Offer Expired!";
  }
}, 1000);



