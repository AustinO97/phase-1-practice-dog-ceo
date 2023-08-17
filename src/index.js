console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreads();
});

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
        data.message.forEach(image => addImage(image));
    });
}

function addImage(picUrl) {
    const container = document.getElementById("dog-image-container");
    const newImage = document.createElement("Img");
    newImage.src = picUrl;
    container.appendChild(newImage);
}

function loadBreads() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then ((resp) => resp.json())
    .then ((data) => {
        const breeds = Object.keys(data.message);
        addBreeds(breeds);
    });
}

function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', function(e) {
            e.target.style.color = "blue";
        });
    });
}