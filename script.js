const btn = document.getElementById("btn");
const notification = document.getElementById("notification");
const redCircles = document.querySelectorAll(".red-circle");
const bg = document.querySelectorAll(".bg");
const read = document.querySelector(".read");

btn.addEventListener("click", () => {
    if(notification.innerHTML === "3") {
      notification.innerHTML = "0";  
    } else {
        notification.innerHTML = "3";
    }

    read.classList.toggle("mark");
    
    for(let i = 0; i < redCircles.length; i++) {
        redCircles[i].classList.toggle("notifications");
        bg[i].classList.toggle("bg");
    }
});