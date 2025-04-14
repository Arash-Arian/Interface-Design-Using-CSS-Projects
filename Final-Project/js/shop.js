const checkboxes = document.querySelectorAll('.filter-checkbox');
const products = document.querySelectorAll('.product-card');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Get the currently checked checkboxes
        const activeFilters = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.filter);
        // Show or hide products based on the active filters
        products.forEach(product => {
            const match = activeFilters.some(filter => product.classList.contains(filter));
            // If no filters are active, show all products
            if (activeFilters.length === 0 || match) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
});