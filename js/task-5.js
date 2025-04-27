function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color");


btn.addEventListener("click", (e) => {
  const color = document.querySelector(".color");
  
  const rndColor = getRandomHexColor()
  document.body.style.backgroundColor = rndColor;
  color.textContent = `- ${rndColor}`
  color.style.color = rndColor;
});

