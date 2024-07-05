
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
    priceDisplay.textContent = `$1 - $${value}`;
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
    const selectedSexes = Array.from(document.querySelectorAll('input[data-sex]:checked'))
                                .map(input => input.getAttribute('data-sex'));
    const selectedCategories = Array.from(document.querySelectorAll('input[data-category]:checked'))
                                     .map(input => input.getAttribute('data-category'));

    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const categoryName = category.getAttribute('data-category');
        const products = category.querySelectorAll('.product');
        let categoryVisible = false;

        products.forEach(product => {
            const productSex = product.querySelector('sex').getAttribute('data-sex');
            const productCategory = category.getAttribute('data-category');

            const sexMatches = selectedSexes.length === 0 || selectedSexes.includes(productSex);
            const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
            if (sexMatches && categoryMatches ) {
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


