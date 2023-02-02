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

]

const removeProperty = (json) => {
    const filtredBySp = json.filter((cityName => cityName.cidade === "São Paulo"))
    console.log(filtredBySp)
    const removedCity = json.filter(cityName => cityName.cidade !== "São Paulo")
    return console.log(removedCity)

}

removeProperty(arrayOfJson)