function getPhotographerIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

async function getPhotographerById(id) {
    let response = await fetch('../../data/photographers.json');
    let data = await response.json();
    return data.photographers.find(p => p.id === parseInt(id));
}

async function displayPhotographerData(photographer) {
 

        const identityElement = document.querySelector('.main-photographer-container-header-infos-identity');
        const placeElement = document.querySelector('.main-photographer-container-header-infos-place');
        const taglineElement = document.querySelector('.main-photographer-container-header-infos-txt');
        const pictureElement = document.querySelector('.main-photographer-container-header-picture');
    
       
        identityElement.textContent = photographer.name;
        placeElement.textContent = `${photographer.city}, ${photographer.country}`;
        taglineElement.textContent = photographer.tagline;
        pictureElement.src = `assets/photographers/${photographer.portrait}`; 
        pictureElement.alt = `Portrait de ${photographer.name}`;
    
    
}

async function init() {
    const photographerId = getPhotographerIdFromURL();
    const photographer = await getPhotographerById(photographerId);
    displayPhotographerData(photographer);
}

init();
