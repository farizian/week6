const transactions = [
    {
      id: 1,
      inv: "TR-001",
      total: 150000,
      details: [
        {
          id: 1,
          idProduct: 1,
          name: "Sikat Gigi",
          price: 10000,
          qty: 10,
        },
        {
          id: 2,
          idProduct: 2,
          name: "Sabun",
          price: 50000,
          qty: 1,
        },
      ],
    },
    {
      id: 2,
      inv: "TR-002",
      total: 100000,
      details: [
        {
          id: 1,
          idProduct: 3,
          name: "Shampoo",
          price: 10000,
          qty: 5,
        },
        {
          id: 2,
          idProduct: 4,
          name: "Pasta Gigi",
          price: 50000,
          qty: 1,
        },
      ],
    },
  ];

  let satu = transactions[0].details
  let dua = transactions[1].details
  
// soal no 1
  let total1id1 = satu[0].price * satu[0].qty
  let total1id2 = satu[1].price * satu[1].qty
  let totalsatu = total1id1 + total1id2
  console.log("Rp."+totalsatu)
// soal no 2
  let total2id1 = dua[0].price * dua[0].qty
  let total2id2 = dua[1].price * dua[1].qty
  let totaldua = total2id1 + total2id2
  console.log("Rp."+totaldua)
// soal no 3
  console.log("Rp."+total1id2)
// soal no 4
  console.log("Rp."+total1id1)
// soal no 5
  console.log("Rp."+total2id1)
// soal no 6
  console.log("Rp."+total2id2)

