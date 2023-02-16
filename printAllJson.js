var myJson = '{ "name":"Matheus", "age":30, "city":"Floripa" }';

const printAll = (json) => {
    const properties = JSON.parse(json)
    console.log(Object.keys(properties))
}

printAll(myJson)