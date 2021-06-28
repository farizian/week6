const biodata = {
    nama: "Fariz",
    no_hp: 08970746280,
    alamat: "bumi asri kutajaya",
    hobbies: ["music", "coding", "gaming", "eat"],
    sekolah: [{name:"SDI Miftahul Huda"}, {name:"SMPN 1 Pasar Kemis"}, {name:"SMKN 2 Kab. Tangerang"}, {name:"UNIVERSITAS GUNADARMA"}],
}
// soal 1
const carinama = (biodata, cb) => {
    let hasil = `nama saya ${biodata.nama}`
    return cb(hasil)
}

carinama(biodata, (hasil) => {
    console.log(hasil)
})


// soal 2
const carihobi = (biodata, cb) => {
    let hasil = `Hobi saya adalah ${biodata.hobbies[1]}`
    return cb(hasil)
}


carihobi(biodata, (hasil)=>{
    console.log(hasil)
})