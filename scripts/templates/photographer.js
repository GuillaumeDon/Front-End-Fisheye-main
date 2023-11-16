
function photographerTemplate(data) {
    const { name, portrait, city, tagline, price, country } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('main-container-photographer-section-article');

        const img = document.createElement('img');
        img.classList.add('main-container-photographer-section-article-img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait of ${name}`);

        const h2 = document.createElement('h2');
        h2.classList.add('main-container-photographer-section-article-title');
        h2.textContent = name;

        const location = document.createElement('p');
        location.classList.add('main-container-photographer-section-article-location');
        location.textContent = city+", "+country;

        const slogan = document.createElement('p');
        slogan.classList.add('main-container-photographer-section-article-slogan');
        slogan.textContent = tagline;

        const cost = document.createElement('p');
        cost.classList.add('main-container-photographer-section-article-cost');

        cost.textContent = `${price}€/day`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(slogan);
        article.appendChild(cost);

        return article;
    }

    return { name, picture, getUserCardDOM };
}
