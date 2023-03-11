// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

const dogImage = document.getElementById('dogsAPI');

const dogButton = document.getElementById('btn-primary');
  
dogButton.addEventListener('click', fetchDogImage);


function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.innerHTML = `<img src="${data.message}"/>`;
  }) 
}