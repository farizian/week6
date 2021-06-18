const nilai = [
  bahasaindonesia = 90,
  mtk = 80,
  bahasainggris = 89,
  ipa = 69,
];

var total = "";
for(i in nilai){
  total = bahasaindonesia+mtk+bahasainggris+ipa / nilai.length;
}
if(bahasaindonesia === "" || mtk === "" || bahasainggris === "" || ipa === ""){
  total = ""
  console.log("Data harus Diisi!")
  return false
}

if(total >= 90){
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
else {
  console.log(`rata-rata = ${total}`)
  console.log('Grade = E');
}

