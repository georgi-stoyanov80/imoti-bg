const putInputsValue = async () => {
    let id = parseInt(location.hash.replace('#', ''));

    if (id) {
        let propertyInfo = new PropertyInfo(id);

        try {
            await propertyInfo.getProperty()
                .then(data => {
                    elements.title.value = data.title;
                    elements.img.value = data.image;
                    elements.city.value = data.city;
                    elements.district.value = data.district;
                    elements.property.value = data.property;
                    elements.typeOfProperty.value = data.typeOfProperty;
                    elements.quadrature.value = data.quadrature;
                    elements.price.value = data.price;
                    elements.information.value = data.information;
                    elements.changeForm.setAttribute('id', data.id);
                });

                elements.btnForm.style.display = 'none';
                elements.changeForm.style.display = 'block';

        } catch (error) {
            console.log(error);
        }
    }
}

window.addEventListener('load', putInputsValue);