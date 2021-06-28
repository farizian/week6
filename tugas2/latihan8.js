// const price = 25000
// const qty = 15

// function perkalian (n1, n2){
//     total = n1 * n2;
//     return total
// }

// console.log(perkalian(price, qty))

// const penambahan = (n1, n2, callback, callback2) => {
//     let total = n1 + n2
//     return callback(total, callback2)
// }

// const perkalian = (total, callback2) => {
//     const hasil = total * 2
//     return callback2(hasil)
// }

// const output = (hasil) => {
//     return hasil
// }

// const hasil = penambahan(5, 3, perkalian, output)

// console.log(hasil)

const cars = ["BMW", "TESLA", "TOYOTA", "PORSCHE"]

const cari = (cars, callback1, callback2) => {
    let hasil = cars[1]
    return callback1(hasil, callback2)
}

const tampil = (hasil, callback2) => {
    let result = hasil+" berhasil dicari"
    return callback2(result)
}

const output = (result) => {
    return result
}
const out = cari(cars, tampil, output)
console.log(out)