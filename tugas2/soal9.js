const biodata = {
    nama: "Fariz",
    no_hp: 08970746280,
    alamat: "bumi asri kutajaya",
    hobbies: ["music", "coding", "gaming", "eat"],
    sekolah: [{name:"SDI Miftahul Huda"}, {name:"SMPN 1 Pasar Kemis"}, {name:"SMKN 2 Kab. Tangerang"}, {name:"UNIVERSITAS GUNADARMA"}],
}
const bio= {
    carinama: (biodata) => {
        const hasil = `nama saya ${biodata.nama}`
        console.log(hasil)
    },
    carihobi: (biodata) => {
    let hasil = `Hobi saya adalah ${biodata.hobbies}`
    console.log(hasil)
    },
    carisekolah: (biodata) => {
        let hasil = `Saya bersekolah di ${biodata.sekolah[3].name}`
        console.log(hasil)
    }
}

const {carinama, carihobi, carisekolah} = bio

carinama(biodata)
carihobi(biodata)
carisekolah(biodata)