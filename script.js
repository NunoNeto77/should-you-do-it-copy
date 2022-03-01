const heart = document.getElementById("heart");
const inputBar = document.getElementById("inputBar");
const gifContainer = document.getElementById("gifContainer");
const buttonsContainer = document.getElementById("buttonsContainer");
const url = "https://shouldyoudoit.herokuapp.com/";
const modalText = document.getElementById("modalText");
let submitButton = document.getElementById("submitButton");
let inputList = [];

heart.innerHTML = `\u{1F497}`;

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function secondOverlayOn() {
  document.getElementById("overlay").style.display = "block";
  modalText.innerText = `Please do another thing.`;
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}



  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputBar.value.length === 0) {
      overlayOn();
      return;
    }

    // if it is a repeated request
    if (inputList.includes(inputBar.value)) {
      secondOverlayOn();
      clearGIF();
      return;
    }

    inputList.push(inputBar.value);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // insert GIF in html
        gifContainer.innerHTML = `
                <h1 id = "message">${data.msg}</h1>
                <img src="${data.img}" alt="${data.msg}" id = "gif">
                `;
      })
      .catch((error) => console.log(error));

    submitButton.style.width = "49%";
    submitButton.style.height = "45px";

    buttonsContainer.insertAdjacentHTML(
      "beforeend",
      `<input type = "reset" id = "clearButton" value="Clean" onclick="clearGIF()">`
    );
  });


function clearGIF() {
  inputList = []; 
  gifContainer.innerHTML = "";
  submitButton.style.width ="583px";
  document.forms[0].reset();
  buttonsContainer.removeChild(buttonsContainer.lastChild);
}
