document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const resetButton = document.getElementById('resetButton');
    const list = document.getElementById('list');
    const originalList = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear'];

    // Function to filter and update the list
    function filterList() {
        const filterText = filterInput.value.toLowerCase();
        list.innerHTML = ''; 

        for (const item of originalList) {
            if (item.toLowerCase().includes(filterText)) {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                list.appendChild(listItem);
            }
        }
    }

    // Function to reset the filter
    function resetFilter() {
        filterInput.value = '';
        filterList(); 
    }

    // Initial list display
    filterList();

    // Listen for input changes
    filterInput.addEventListener('input', filterList);

    // Listen for reset button click
    resetButton.addEventListener('click', resetFilter);
});
