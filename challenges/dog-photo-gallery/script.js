function addDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cardContainer = document.getElementById('cards-container');
      let item = document.createElement('col');
      item.className = 'col';
      let card = document.createElement('div');
      card.className = 'card bg-dark text-white';
      let image = document.createElement('img');
      image.className = 'card-img-top';
      image.src = `${data.message}`;
      image.alt = 'Dog image';
      card.appendChild(image);
      let bodyDiv = document.createElement('div');
      bodyDiv.className = 'card-img-overlay';
      let cardTitle = document.createElement('h5');
      let span = document.createElement('span');
      span.style.backgroundColor = 'rgb(31, 75, 71)';
      span.style.padding = '5px';
      //cardTitle.style.textAlign = 'center';
      cardTitle.className = 'card-title';
      const urlArr = data.message.split('/');
      const dogTitle = urlArr[urlArr.length - 2].toUpperCase();
      const cardText = document.querySelector('.card-title');
      span.innerHTML = `${dogTitle}`;
      cardTitle.appendChild(span);
      bodyDiv.appendChild(cardTitle);
      card.appendChild(bodyDiv);
      item.appendChild(card);
      cardContainer.insertBefore(item, cardContainer.firstChild);
    })
    .catch((error) => console.log(error));
}
const submitButton = document.querySelector('#add-dog');
submitButton.addEventListener('click', function processData(event) {
  event.preventDefault();
  addDog();
});

window.onload = addDog;
