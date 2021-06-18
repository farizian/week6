const biodata = {
  nama: "Dani",
  pekerjaan: "Software Engineer",
  umur: 25,
  tempattanggallahir: "7 Januari 1995",
  hobbies: ["Gaming", "Karaoke"]
}

let { nama, pekerjaan, tempattanggallahir: ttl } = biodata

console.log(`${nama}, ${pekerjaan}, ${ttl}`)

// const arr = [["Red", "Red2"], "Blue", "Green", "Yellow"]

// let [a, b, c, d] = arr
// let [x, y] = a

// console.log(x)
