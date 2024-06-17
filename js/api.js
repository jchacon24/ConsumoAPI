document.getElementById('getProductsBtn').addEventListener('click', function() {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const productsInfo = data.map(product => `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Precio:</strong> $${product.price}</p>
                            <p class="card-text"><strong>Categoría:</strong> ${product.category}</p>
                            <a href="#" class="btn btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
            `).join('');

            document.getElementById('products-info').innerHTML = productsInfo;
        })
        .catch(error => {
            console.error('Error al consumir la API:', error);
            document.getElementById('products-info').innerHTML = 'Ocurrió un error. Por favor, intenta de nuevo.';
        });
});
