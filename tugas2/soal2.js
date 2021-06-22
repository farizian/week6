
const bahasaindonesia = 80;
const mtk = 80;
const bahasainggris = 89;
const ipa = 69;

if(typeof bahasaindonesia === 'number' && typeof mtk === 'number' && typeof bahasainggris === 'number' && typeof ipa === 'number'){
  console.log("nilai anda adalah: ")

  var total = bahasaindonesia+mtk+bahasainggris+ipa / 4;

  if(total >= 90 ){
    console.log(`rata-rata = ${total}`)
    console.log('Grade = A');
  }
  else if(total >= 80){
    console.log(`rata-rata = ${total}`)
    console.log('Grade = B');
  }
  else if(total >= 70){
    console.log(`rata-rata = ${total}`)
    console.log('Grade = C');
  }
  else if(total >= 60){
    console.log(`rata-rata = ${total}`)
    console.log('Grade = D')
  }
  else if(total >=0){
    console.log(`rata-rata = ${total}`)
    console.log('Grade = E');
  }
  else{
    console.log("output negatif")
  }

}
else if(bahasaindonesia === "" || mtk === "" || bahasainggris === "" || ipa === ""){
  console.log("Data harus Diisi!")
}
else {
  console.log("tipe data harus number")
}




