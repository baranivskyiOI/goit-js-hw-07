const categoriesListItems = document.querySelectorAll('.item')

function showListInfo(list) {

    console.log(`Number of categories: ${list.length}`);

    list.forEach(element => {
        const listCategory = element.firstElementChild.textContent
        console.log(`Category: ${listCategory}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
    
};

showListInfo(categoriesListItems)
