const colors = ["green", "red", "Orange", "Yellow","Blue","indigo","violet"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
 const randomNumber = Math.floor(Math.random() * colors.length )
 console.log(randomNumber);
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});