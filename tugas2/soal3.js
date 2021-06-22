const input = 10;

if (typeof input === 'number' ) {

  for (let i = input; i >= 1; i--){
    let output = "";
    for (let j = 1; j<=i; j++){
      output += j + " "
    }
    console.log(output)
  }
}
else{
  console.log("Format wajib angka!");
}

