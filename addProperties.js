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
    }
]

console.log(arrayOfJson)

const showData = (param) => {
    param.filter((cityName) => cityName.cidade === "Belo Horizonte").map((i) => Object.assign(i, { "estado": "MG" }))
    return console.log(arrayOfJson)
}

showData(arrayOfJson)