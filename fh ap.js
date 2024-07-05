document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('product added to the cart!');
        });
    });
});
function filterProducts(maxPrice) {
    const products = document.querySelectorAll('.product');
    const category = document.querySelectorAll('.category');
    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-prize'));
        if (price <= maxPrice) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}
function updatePriceDisplay(value) {
    const priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = `$15 - $${value}`;
}
document.addEventListener('DOMContentLoaded', function () {
    const priceRange = document.getElementById('priceRange');
    const initialMaxPrice = parseFloat(priceRange.value);
    updatePriceDisplay(initialMaxPrice);
    filterProducts(initialMaxPrice);

    priceRange.addEventListener('input', function () {
        const maxPrice = parseFloat(this.value);
        updatePriceDisplay(maxPrice);
        filterProducts(maxPrice);
    });
});
function filterPosts() {
    const selectedBrands = Array.from(document.querySelectorAll('input[data-brand]:checked'))
                                 .map(input => input.getAttribute('data-brand'));

    const selectedCategories = Array.from(document.querySelectorAll('input[data-category]:checked'))
                                     .map(input => input.getAttribute('data-category'));

    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        
        const products = category.querySelectorAll('.product');
        let categoryVisible = false;

        products.forEach(product => {
            const productBrand = product.getAttribute('data-brand');
            const categoryName = category.getAttribute('data-category');

            const brandMatches = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
            const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(categoryName);

            if (brandMatches && categoryMatches) {
                product.classList.remove('hidden');
                categoryVisible = true;
            } else {
                product.classList.add('hidden');
            }
        });

        if (categoryVisible) {
            category.classList.remove('hidden');
        } else {
            category.classList.add('hidden');
        }
    });
}

