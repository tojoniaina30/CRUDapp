let users = []

async function getData () {
  await fetch('http://localhost:3000/users')
  .then(async(response) => {
    const data = await response.json()
    users = data
  })

}

 /*  for (var i = 0; i < data.length; i++) {
    
  } */
await getData();
console.log (users)

//affichage des cards

    const $div = document.createElement("div");
    $div.style.maxWidth = "1245px"
    $div.style.margin = "auto"
    document.body.append($div)



    const $divCard = document.createElement("div");
    $divCard.style.display = "flex"
    $divCard.style.flexWrap = "wrap"
    $divCard.style.gap = "10px"
    $divCard.style.paddingTop = "10px"
    $div.append($divCard)

    

for (var i=0; i<users.length; i++) {
    const $aCard = document.createElement("a");
    $aCard.classList.add("card")
    $aCard.style.border = "solid 2px red"
    $aCard.style.borderRadius = "10px"
    $aCard.style.color = "grey"
    $aCard.style.width = "250px"
    $aCard.style.padding = "20px"
    $aCard.style.display = "flex"
    $aCard.style.alignItems = "center"
    $aCard.style.textAlign  = "center"
    $aCard.style.flexDirection = "column"
    $divCard.append($aCard)    

    const firstName = document.createElement ("h1")
    firstName.textContent = "First name : " + users[i].firstName
    $aCard.append(firstName)

    const lastName = document.createElement ("h1")
    lastName.textContent = "Last name : " + users[i].lastName
    $aCard.append(lastName)

    const divImg = document.createElement("div")
    divImg.style.width = "fit-content"
    divImg.style.borderRadius = "50px"
    divImg.style.margin = "auto auto 5px auto"
    $aCard.append(divImg)

    const avatar = document.createElement ("img")
    avatar.src = users[i].avatar
    avatar.style.width = "100px"
    avatar.style.height = "100px"
    $aCard.append(avatar)
}