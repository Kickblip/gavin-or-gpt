import snippets from "../assets/snippet-list.js";

document.addEventListener("DOMContentLoaded", () => {
  const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  const divs = document.querySelectorAll(".content-div");

  let firstDivIsGavin = Math.random() > 0.5;
  divs[0].textContent = firstDivIsGavin
    ? randomSnippet.gavin
    : randomSnippet.gpt;
  divs[1].textContent = firstDivIsGavin
    ? randomSnippet.gpt
    : randomSnippet.gavin;

  divs.forEach((div, index) => {
    div.addEventListener("click", () => {
      const isCorrect =
        (firstDivIsGavin && index === 0) || (!firstDivIsGavin && index === 1);
      div.style.backgroundColor = isCorrect ? "#90ee90" : "#ffcccb";
      if (!isCorrect) {
        div.classList.add("shake");
        setTimeout(() => div.classList.remove("shake"), 500);
      }
    });
  });
});
