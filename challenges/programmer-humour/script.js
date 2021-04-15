fetch('https://xkcd.now.sh/?comic=latest')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const dataImage = document.querySelector('.card-img-top');
    dataImage.src = `${data.img}`;
    dataImage.alt = `${data.alt}`;
    const dataTitle = document.querySelector('.card-title');
    dataTitle.innerHTML = `${data.title}`;
    const dataText = document.querySelector('.card-text');
    dataText.innerHTML = `${data.transcript}`;
  })
  .catch((error) => console.log(error));
