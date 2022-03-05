const url = "https://shouldyoudoit.herokuapp.com/all";
const leftSideList = document.querySelector(".leftSideList");
const rightSideList = document.querySelector(".rightSideList");

heart.innerHTML = `\u{1F497}`;


// to show GIFs
fetch(url)
.then((response) => response.json())
.then((data) => {

for (let i = 0; i < data.length; i++) {
    if (data[i].msg === "do it") {
        leftSideList.innerHTML += `<li class = "gif"><img src="${data[i].img}" width="160" height="160"> </li>`
        continue;
    }

    rightSideList.innerHTML += `<li class = "gif"><img src="${data[i].img}" width="160" height="160"> </li>`   
} }); 