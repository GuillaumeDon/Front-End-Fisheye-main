function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('main-container-photographer-section-article')
        const img = document.createElement( 'img' );
        img.classList.add('main-container-photographer-section-article-img')
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.classList.add('main-container-photographer-section-article-title')
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}