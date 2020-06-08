class GetData {
    constructor(page) {
        this.url = 'https://5be6bba687be04001325b59c.mockapi.io/imoti';
        this.page = page || 1;
    }

    async getResults() {
        try {
            let res = await fetch(`${this.url}${`?page=${this.page}&limit=12`}`);
            let data = await res.json();
            let newRes = await fetch(this.url);
            let newData = await newRes.json();
            this.dataLength = newData.length;
            return data;
            
        } catch (error) {   
            console.log(error);
        }
    }
}

class PropertyInfo {
    constructor(id) {
        this.url = 'https://5be6bba687be04001325b59c.mockapi.io/imoti';
        this.id = id;
    }

    async getProperty() {
        try {
            let res = await fetch(`${this.url}/${this.id}`);
            let data = await res.json();
            return data;            

        } catch (error) {
            console.log(error);
        }
    }
}

class PostData {
    constructor() {
        this.url = 'https://5be6bba687be04001325b59c.mockapi.io/imoti';
    }

    async postProperty() {
        try {
            return await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: `&title=${elements.title.value}&image=${elements.img.value}&city=${elements.city.value}&district=${elements.district.value}&property=${elements.property.value}&typeOfProperty=${elements.typeOfProperty.value}&quadrature=${elements.quadrature.value}&price=${elements.price.value}&information=${elements.information.value}`
            });

        } catch (error) {
            console.log(error);
        }
    }
}

class DeleteData {
    constructor(id) {
        this.url = 'https://5be6bba687be04001325b59c.mockapi.io/imoti';
        this.id = id;
    }

    async deleteProperty() {
        return await fetch(`${this.url}/${this.id}`, {
            method: 'DELETE'
        });
    }
}

class PutData {
    constructor(id) {
        this.url = 'https://5be6bba687be04001325b59c.mockapi.io/imoti';
        this.id = id;
    }

    async putProperty() {
        try {
            return await fetch(`${this.url}/${this.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: `&title=${elements.title.value}&image=${elements.img.value}&city=${elements.city.value}&district=${elements.district.value}&property=${elements.property.value}&typeOfProperty=${elements.typeOfProperty.value}&quadrature=${elements.quadrature.value}&price=${elements.price.value}&information=${elements.information.value}`
            });

        } catch (error) {
            console.log(error);
        }
    }
}