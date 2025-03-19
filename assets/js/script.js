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
              delay: 3000, 
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

 const offerEndDate = new Date("mar 30, 2025 23:59:59").getTime();

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

      // Display the result with zero padding if necessary
      daysElement.textContent = days;
      hoursElement.textContent = String(hours).padStart(2, '0');
      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');

      // If the countdown is finished, display a message and stop the interval
      if (remainingTime <= 0) {
        clearInterval(updateCountdown);
        countdownElement.textContent = "Offer Expired!";
      }
    }, 1000);

// form validation

 function validateForm()
  {
    let isValid=true

    document.getElementById('nameError').textContent=''
    document.getElementById('emailError').textContent=''
    document.getElementById('classError').textContent=''
    document.getElementById('msgError').textContent=''


    let name=document.getElementById('name').value
    if(name === '')
    {
      document.getElementById('nameError').textContent="Enter a name"
      isValid=false
    }
    

    let email=document.getElementById('email').value
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '')
    {
      document.getElementById('emailError').textContent="Enter  a Email"
      isValid=false
    }
    else if(!emailPattern.test(email))
    {
      document.getElementById('emailError').textContent="Enter the email Format"
      isValid=false
    }

    let classes=document.getElementById('classes').value
    if(classes === '')
    {
      document.getElementById('classError').textContent="Enter a classes"
      isValid=false
    }

    let msg=document.getElementById('msg').value
    if(msg === '')
    {
      document.getElementById('msgError').textContent="Enter a message"
      isValid=false
    }

    let submit=document.getElementById('submit').value
    if(name !== '' && email !== '' && classes !== '' && msg !== '' )
    {
      alert('Your Order Placed SuccessFully.')
      isValid=true
    }

    return isValid
  }


 // slide

 window.addEventListener("load", function() {
            let images = document.querySelectorAll("#image .img");
            let Index = 0;

            setInterval(() => {
                images[Index].style.display = "none";
                Index = (Index + 1) % images.length;
                images[Index].style.display = "block";
            }, 3000); 
        });
