const products = [
    {title: 'Notebook', price: 2000, imgSrc: 'img/noimage.jpg'},
    {title: 'Mouse', price: 20, imgSrc: 'img/noimage.jpg'},
    {title: 'Keyboard', price: 48, imgSrc: 'img/noimage.jpg'},
    {title: 'Gamepad', price: 63, imgSrc: 'img/noimage.jpg'},
    {title: 'Chair', price: 200, imgSrc: 'img/noimage.jpg'}
];


const renderProduct = (title = 'No title', price = 'No price', imgSrc = 'img/noimage.jpg') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${imgSrc}" alt="Изображение продукта">
                <p class="price">${price}</p>
                <button class="btn-cart" type="button">Добавить </button>
            </div>`
};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.imgSrc)).join('');
    document.querySelector('.products').innerHTML = productList;
};

renderPage(products);