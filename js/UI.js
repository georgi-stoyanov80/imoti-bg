class UI {
    renderPropertys(data) {
        data.forEach(item => {
            let html = `
                <a href="#${item.id}" class="col-md-3 text-decoration-none mb-3">
                    <div class="card">
                        <img src="${item.image}" class="card-img-top card-img" alt="${item.title}">
                        <div class="card-body">
                            <p class="card-text text-dark "><small>${limitPropertyTitle(item.title)}</small></p>
                            <h4 class="text-primary">${item.price} лв.</h4>
                        </div>
                    </div>
                </a>
            `;

            elements.propertysList.insertAdjacentHTML('beforeend', html);
        });
    }

    randerPropertyInfo(data) {
        elements.sort.innerHTML = '';
        elements.propertysList.innerHTML = '';
        document.querySelector('.pagination').innerHTML = '';

        let html = `
            <button type="button" class="btn btn-primary back mb-3">Назад</button>
            <div class="row">
                <div class="col-md-5">
                    <img src="${data.image}" class="card-img-top">
                </div>

                <div class="col-md-7">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-info"><h4>${data.title}</h4></li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Град</span> <b>${data.city}</b>
                        </li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Имот</span> <b>${data.property}</b>
                        </li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Вид на имота</span> <b>${data.typeOfProperty}</b>
                        </li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Квартал/Район</span> <b>${data.district}</b>
                        </li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Квадратура</span> <b>${data.quadrature} кв.м</b>
                        </li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Цена</span> <b>${data.price} лв.</b>
                        </li>
                        <h5 class="mt-3">Допълнителна информация:</h5>
                        <li class="list-group-item">${data.information}</li>
                    </ul>
                </div>
            </div>
            <button type="button" id="${data.id}" class="btn btn-danger delete-property mt-5 mr-3">Изтрий обявата</button>
            <button type="button" id="${data.id}" class="btn btn-warning change-property mt-5">Промени обявата</button>
        `;

        elements.propertysList.insertAdjacentHTML('beforeend', html);
    }

    changeTypeOfProperty() {
        if (elements.property.value === 'Апартамент') {
            elements.typeOfProperty.innerHTML = `
                <option value="Едностаен">Едностаен</option>
                <option value="Двустаен">Двустаен</option>
                <option value="Тристаен">Тристаен</option>
                <option value="Многостаен">Многостаен</option>
            `;
        } else if (elements.property.value === 'Къща') {
            elements.typeOfProperty.innerHTML = `
                <option value="Едноетажна">Едноетажна</option>
                <option value="Двуетажна">Двуетажна</option>
                <option value="Триетажна">Триетажна</option>
                <option value="Четириетажна">Четириетажна</option>
            `;
        }
    }

    createPagination(dataLength) {
        for (let i = 0; i < Math.ceil(dataLength / 12); i++) {
            let html = `
                <li class="page-item"><a class="page-link text-primary">${i + 1}</a></li>
            `;
            
            document.querySelector('.pagination').insertAdjacentHTML('beforeend', html);
        }
    }
}
