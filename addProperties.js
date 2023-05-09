const arrayOfJson = [
    {
        "cidade": "Belém",
        "estado": "Pará"
    },
    {
        "cidade": "São Paulo",
        "estado": "SP"
    },
    {
        "cidade": "Rio de Janeiro",
        "estado": "RJ"
    },
    {
        "cidade": "Belo Horizonte",
    },
    {
        "cidade": "Belo Horizonte",
    },

]

const addNewProperty = (json) => {
    json.filter((cityName) => cityName.cidade === "Belo Horizonte").map((i) => Object.assign(i, { "estado": "MG" }))
    return console.log(arrayOfJson)
}

addNewProperty(arrayOfJson)