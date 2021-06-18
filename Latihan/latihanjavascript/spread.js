const pekerjaan = {
  namaPekerjaan: "Software Engineer",
  status: "Pegawai Tetap"
}

const user = {
  nama: "Sarifudin",
  umur: 25,
  namaPekerjaan: "IT Support",
  ...pekerjaan
}

console.log(user)

// const hobby = ["gaming", "swiming"]
// const newHobby = [...hobby, "karaoke", "hiking"]
// console.log(newHobby)