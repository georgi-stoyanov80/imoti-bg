let ui = new UI();

const postPropertys = async e => {
    e.preventDefault();

    let postData = new PostData();

    try {

        if (
            elements.title.value === '', 
            elements.img.value === '', 
            elements.city.value === '', 
            elements.district.value === '', 
            elements.quadrature.value === '',
            elements.price.value === '',
            elements.information.value === ''
        ) {
            formAlertMessage(elements.btnForm ,'Моля попълнете всички полета!');

        } else {
            await postData.postProperty();
            clearInputs();
            formAlertMessage(elements.btnForm ,'Данните са изпратени');
        }
        
    } catch (error) {
        console.log(error);
    }   
}; 

const putPropertys = async e => {
    e.preventDefault();
    let id = elements.changeForm.id;

    if (id) {
        let putData = new PutData(id);

        try {
            await putData.putProperty();
            clearInputs();
            formAlertMessage(elements.changeForm ,'Данните са изпратени');
            setTimeout(() => {
                location.replace('index.html');
            }, 1000);

        } catch (error) {
            console.log(error);
        }   
    }
};

elements.form.addEventListener('submit', postPropertys);
elements.changeForm.addEventListener('click', putPropertys);
elements.property.addEventListener('change', ui.changeTypeOfProperty);



