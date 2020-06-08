let getData = new GetData();
let ui = new UI();

const results = async () => {

    try {
        await getData.getResults().then(ui.renderPropertys);
        ui.createPagination(getData.dataLength);
        
    } catch (error) {
        console.log(error);
    }  
}

const controlPropertys = async e => {
    let id = parseInt(e.target.location.hash.replace('#', ''));
    let propertyInfo = new PropertyInfo(id);

    if (id) {
        try {
            await propertyInfo.getProperty().then(ui.randerPropertyInfo);

        } catch (error) {
            console.log(error);
        }
    }
}

window.addEventListener('load', results);
window.addEventListener('hashchange', controlPropertys);

const removeProperty = async () => {
    let id = parseInt(document.querySelector('.delete-property').id, 10);
    let deleteData = new DeleteData(id);

    try {
        await deleteData.deleteProperty();
        deleteBtnStyle();

    } catch (error) {
        console.log(error);
    }
}
    
document.addEventListener('click', e => {
    if (e.target.classList.contains('back')) {
        location.replace('index.html'); 
    } else if (e.target.classList.contains('delete-property')) {
        removeProperty();
    } else if (e.target.classList.contains('change-property')) {
        let id = parseInt(document.querySelector('.change-property').id, 10);
        location.replace('forms.html#' + id);
    }
});

const sortPropertys = async () => {
    try {

        await getData.getResults().then(data => {
            let items;
            
            if (elements.sortBy.value === 'default') {
                clearPropertysList();
                ui.renderPropertys(data);
                
            } else if (elements.sortBy.value === 'lowPrice') {
                items = data.sort((a, b) => a.price - b.price);
                clearPropertysList();
                ui.renderPropertys(items);
                
            } else if (elements.sortBy.value === 'highPrice') {
                items = data.sort((a, b) => b.price - a.price);
                clearPropertysList();
                ui.renderPropertys(items);
    
            } else if (elements.sortBy.value === 'apartments') {
                items = data.filter(item => item.property === 'Апартамент');
                clearPropertysList();
                ui.renderPropertys(items);
    
            } else if (elements.sortBy.value === 'houses') {
                items = data.filter(item => item.property === 'Къща');
                clearPropertysList();
                ui.renderPropertys(items);
            }
        });

    } catch (error) {
        console.log(error);
    }
};

elements.sortBy.addEventListener('change', sortPropertys);

elements.pagination.forEach(el => {
    el.addEventListener('click', e => {
        let page = parseInt(e.target.textContent, 10);
        
        getData = new GetData(page);
        clearPropertysList();
        getData.getResults().then(ui.renderPropertys);
        elements.propertysList.style.height = '912px';
        elements.sortBy.value = 'default';
    });
});







