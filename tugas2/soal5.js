const input = 10;

if (typeof input === 'number' ) {

  for (let i = input; i >=1; i--){
    let output = "";
    for (let j = i; j>=1; j--){
      output += j + " "
    }
    console.log(output)
  }
}
else{
    console.log("Format wajib angka!");
}

