import snippets from "./assets/snippet-list.js";
let correctCounter = 0
let totalCounter = 0
let repeatArray = []
let breakLoop = 0



const resetButtons = () => {
  const divs = document.querySelectorAll(".content-div");
  const paragraph = document.querySelector(".content")

  divs.forEach((div) => {
    div.removeEventListener("click", handleClick);
    div.style.backgroundColor = "#d3d3d3";
    div.classList.remove("shake");
  });


  let gptOrGavin = Math.random() > 0.5;
  if (gptOrGavin == true){
    paragraph.innerHTML = snippets[Math.floor(Math.random() * snippets.length)].gavin //sets the paragraph to gavin
  }else{
    paragraph.innerHTML = snippets[Math.floor(Math.random() * snippets.length)].gpt //sets the paragraph to gpt
  }
  breakLoop = 1
  while(repeatArray.includes(snippets.find(i => i.gavin === paragraph.innerHTML || i.gpt === paragraph.innerHTML)) === true){
    if (breakLoop === repeatArray.length){
      repeatArray = []
    }
    let gptOrGavin = Math.random() > 0.5;
    if (gptOrGavin == true){
      paragraph.innerHTML = snippets[Math.floor(Math.random() * snippets.length)].gavin 
    }else{
      paragraph.innerHTML = snippets[Math.floor(Math.random() * snippets.length)].gpt 
    }
    breakLoop = breakLoop + 1
  }
  
  repeatArray.push(snippets.find(i => i.gavin === paragraph.innerHTML || i.gpt === paragraph.innerHTML))
  divs[0].dataset.isGavin = gptOrGavin;
  divs[1].dataset.isGavin = !gptOrGavin;

  divs.forEach((div) => {
    div.addEventListener("click", handleClick);
  });
};

const handleClick = (event) => {
  const div = event.currentTarget;
  const isGavin = div.dataset.isGavin === "true";
  const isCorrect = isGavin
  totalCounter += 1

  document
    .querySelectorAll(".content-div")
    .forEach((d) => d.removeEventListener("click", handleClick));

  div.style.backgroundColor = isCorrect ? "#90ee90" : "#ffcccb";
  if (!isCorrect) {
    div.classList.add("shake");
  }else {
    correctCounter += 1
  }
  document.querySelector(".totalCorrect").innerHTML = correctCounter + "/" + totalCounter

  setTimeout(() => {
    resetButtons();
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  resetButtons();
});
