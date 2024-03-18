import snippets from "../assets/snippet-list.js";

document.addEventListener("DOMContentLoaded", () => {
  // Pick a random snippet pair from the list
  const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];

  const divs = document.querySelectorAll(".content-div");

  // Randomly choose which snippet will go in each box
  if (Math.random() > 0.5) {
    divs[0].textContent = randomSnippet.gpt;
    divs[1].textContent = randomSnippet.gavin;
  } else {
    divs[0].textContent = randomSnippet.gavin;
    divs[1].textContent = randomSnippet.gpt;
  }
});
