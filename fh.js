document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produit ajouté au panier!');
        });
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

            const sexMatches = selectedSexes.length === 0 || selectedSexes.includes(productSex);
            const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(categoryName);

            if (sexMatches && categoryMatches) {
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


    
    function addClass() {
        document.body.classList.add("sent");
      }
      
      sendLetter.addEventListener("click", addClass);
}




