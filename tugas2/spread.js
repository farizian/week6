const datadiri = {
    name: "Fariz Irfan Rifai",
    email: "farizirfan8@gmail.com",
    hobby: "music",
}

const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...datadiri,
    address:
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
console.log(data)

let{street,city} = data.address


console.log(`${street}, 
${city}`)