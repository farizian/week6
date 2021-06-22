const transaction = {
    id: 5,
    invoice : "data",
    date : "2020/5/20",
    total : 10.000,
    details : [
        {
            id: 5,
            idproduct: 5,
            name: "nama",
            price: 5000,
            qty: 6,
        },
        {
            id: 5,
            idproduct: 5,
            name: "nama",
            price: 5000,
            qty: 6,
        },
        {
            id: 5,
            idproduct: 5,
            name: "nama",
            price: 5000,
            qty: 6,
        }
    ]
}
let data = transaction.details
// console.log(data [1])
hasil = data[0].price * data[0].qty
console.log(hasil)
