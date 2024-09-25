const search_button = document.getElementById("fetch-button");
const apiKey = "FIhf3tZ2SjaF5Q7uvh8IkN2PBeUClMuwoENUvyJa";
let url;

const textH2 = document.getElementById("text");

let imageSrc = document.getElementById("image");
let figure = document.getElementById("figure");
let caption = document.getElementById("caption");

search_button.addEventListener("click", function () {
  let date = document.getElementById("date-input").value;
  url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  textH2.classList.add("hidden");
  figure.classList.remove("hidden");

  fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
      console.log(jsonBody);
      imageSrc.src = jsonBody.url;
      let innerExplanation = jsonBody.explanation;
      //   caption.innerText = innerExplanation;
    })
    .catch((error) => console.error("Erro:", error));
});
