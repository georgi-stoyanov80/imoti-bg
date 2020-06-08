let elements = {
    home: document.getElementById('home'),
    propertysList: document.getElementById('propertysList'),
    sort: document.querySelector('.sort'),
    form: document.getElementById('form'),
    title: document.getElementById('title'),
    img: document.getElementById('img'),
    city: document.getElementById('city'),
    district: document.getElementById('district'),
    property: document.getElementById('property'),
    typeOfProperty: document.getElementById('typeOfProperty'),
    quadrature: document.getElementById('quadrature'),
    price: document.getElementById('price'),
    information: document.getElementById('information'),
    btnForm: document.querySelector('.btn-form'),
    changeForm: document.querySelector('.change-form'),
    sortBy: document.getElementById('sortBy'),
    pagination: document.querySelectorAll('.pagination')
};

const clearInputs = () => {
    let arrInputs = [
        elements.title, 
        elements.img, 
        elements.city, 
        elements.district, 
        elements.quadrature,
        elements.price,
        elements.information
    ];

    arrInputs.forEach(el => {
        el.value = '';
    });
};

const clearPropertysList = () => {
    elements.propertysList.innerHTML = '';
};

const limitPropertyTitle = (title, limit = 27) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')}`;
    }
    return title;
};

const formAlertMessage = (btn, message) => {
    btn.textContent = message;
    setTimeout(() => {
        btn.textContent = 'Качи обявата';
    }, 2000);
};

const deleteBtnStyle = () => {
    let deleteProperty = document.querySelector('.delete-property');

    deleteProperty.style.width = '142px';
    deleteProperty.innerHTML = `
        <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>`;
    setTimeout(() => {
        location.replace('index.html');
    }, 2000);
};
