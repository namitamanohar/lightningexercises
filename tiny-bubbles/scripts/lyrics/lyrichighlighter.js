export const highlightlyricEvents = () => {
  document.querySelector(".container").addEventListener("mouseover", event => {
    if (event.target.classList.contains("lyrics__text")) {
      event.target.classList.add("highlightWithGoldenrod");
    }
  });
  
  document.querySelector(".container").addEventListener("mouseout", event => {
    if (event.target.classList.contains("lyrics__text")) {
      event.target.classList.remove("highlightWithGoldenrod");
    }
  });


}

