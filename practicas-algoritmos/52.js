const invetarioFrutas = [
    {
        id: 1,
        tipoFruta: "manzana",
        cantidad: 50
    },
    {
        id: 2,
        tipoFruta: "pera",
        cantidad: 25
    },
    {
        id: 3,
        tipoFruta: "fresas",
        cantidad: 150
    },
    {
        id: 4, 
        tipoFruta: "uvas",
        cantidad: 10
    }
]

const ordenarFrutas = (arr)=>{
    return arr.sort((a,b)=> b.cantidad - a.cantidad)
}

const comprarFrutas = (arrfr)=>{
    return arrfr
}
console.log("resultado", ordenarFrutas(invetarioFrutas));
