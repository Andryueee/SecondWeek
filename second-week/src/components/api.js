async function fetchProducts() {
    try {
        const response = await fetch('https://jurapro.bhuser.ru/api-shop/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных о товарах:', error);
        return null;
    }
}

fetchProducts().then(products => {
    console.log('Данные о товарах:', products);
});
