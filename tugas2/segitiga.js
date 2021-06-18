const printsegitiga = 1;

if (typeof printsegitiga === 'string' ) {
  console.log("Format wajib angka!");
}

for (let i = 6; i >= printsegitiga; i--){
  let output = "";
  for (let j = 1; j<=i; j++){
    output += j
  }
  console.log(output)
}