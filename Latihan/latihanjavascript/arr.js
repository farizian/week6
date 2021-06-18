// let cars = ["BMW", "Toyota", "Ford", 1,2,3]
// console.log(cars[0])

// let dataFazztrack = [
//   {
//     nama: "Rouf",
//     umur: 24
//   },
//   {
//     nama: "Fariz",
//     umur: 23
//   },
//   {
//     nama: "Figo",
//     umur: 20
//   }
// ]
// console.log(dataFazztrack[1].umur)

const data = [
  ["BMW", "Toyota", "Ford"],
  ["A", "B", ["a", "b", "c", [11,12,13, [{nama: "Hello"}],14]], "C", "D"],
  [1 ,2 ,3 ,4 ,5],
]

console.log(data[1][2][3][3][0].nama)