
function photographerTemplate(data) {
    const { name, portrait, city, tagline, price, country, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {


        const article = document.createElement('article');
        article.classList.add('main-container-photographer-section-article');


        

        
       

        const identity =document.createElement('div');
        identity.classList.add('main-container-photographer-section-article-identity');



        const img = document.createElement('img');
        img.classList.add('main-container-photographer-section-article-identity-img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait of ${name}`);

        const h2 = document.createElement('h2');
        h2.classList.add('main-container-photographer-section-article-identity-title');
        h2.textContent = name;



        const content =document.createElement('div');
        content.classList.add('main-container-photographer-section-article-content');

        const location = document.createElement('p');
        location.classList.add('main-container-photographer-section-article-content-location');
        location.textContent = city+", "+country;

        const slogan = document.createElement('p');
        slogan.classList.add('main-container-photographer-section-article-content-slogan');
        slogan.textContent = tagline;

        const cost = document.createElement('p');
        cost.classList.add('main-container-photographer-section-article-content-cost');

        cost.textContent = `${price}€/day`;

        const anchor = document.createElement('a');
        anchor.href =`photographer.html?id=${id}`;
        anchor.appendChild(article); 
   


        article.appendChild(identity);
        article.appendChild(content);
        identity.appendChild(img);
        identity.appendChild(h2);
        content.appendChild(location);
        content.appendChild(slogan);
        content.appendChild(cost);
 
        // anchor.addEventListener('click', function(event) {
        //     console.log(`Voici l'ID:${id}`);
        // });

        return anchor;
    }

    return { name, picture, getUserCardDOM };
}
