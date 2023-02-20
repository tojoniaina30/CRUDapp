let users = []

async function getData () {
  await fetch('http://localhost:3000/users', {
    method: "GET",
    mode: "cors"
  })
  .then(async(response) => {
    const data = await response.json()
    users = data
  })
}

await getData();
console.log (users)

//affichage des cards

    const $div = document.createElement("div");
    $div.style.maxWidth = "1245px"
    $div.style.margin = "auto"
    document.body.append($div)

    const divHead = document.createElement('div')
    divHead.style.display = 'flex'
    $div.append(divHead)

//bar de recherche    
    const divSearch = document.createElement("div")
    divSearch.classList.add('divSearch')
    divSearch.style.backgroundColor = "#E9E9E9"
    divSearch.style.margin = "5px auto 5px auto"
    divSearch.style.width = "fit-content"
    divSearch.style.padding = "5px 10px"
    divSearch.style.borderRadius = "5px"
    divHead.append(divSearch)

    const formSearch = document.createElement('form')
    formSearch.style.backgroundColor = "#E9E9E9"
    divSearch.append(formSearch)

    const inputSearch = document.createElement('input')
    inputSearch.type = "text"
    inputSearch.placeholder = "Search ..."
    inputSearch.style.border = "inherit"
    inputSearch.style.backgroundColor = "#E9E9E9"
    formSearch.append(inputSearch)

    const iconSearch = document.createElement("img")
    iconSearch.src = "assets/img/search.png"
    iconSearch.style.width = "10px"
    formSearch.append(iconSearch)

    const $divCard = document.createElement("div");
    $divCard.style.display = "flex"
    $divCard.style.flexWrap = "wrap"
    $divCard.style.gap = "10px"
    $divCard.style.paddingTop = "10px"
    $div.append($divCard)

//Button add user    
    const aAddUser = document.createElement('button')
    aAddUser.style.margin = '5px 20px 0 0'
    aAddUser.style.padding = "10px 20px"
    aAddUser.style.borderRadius = "10px"
    aAddUser.style.border = "inherit"
    aAddUser.textContent = "Add User"
    aAddUser.style.color = "black"
    aAddUser.style.backgroundColor = "#3AA93A"
    divHead.append(aAddUser)

// card
for (var i=0; i<users.length; i++) {
    const $aCard = document.createElement("a");
    $aCard.classList.add("card")
    $aCard.style.border = "solid 2px red"
    $aCard.style.borderRadius = "10px"
    $aCard.style.color = "grey"
    $aCard.style.width = "250px"
    $aCard.style.padding = "40px 20px"
    $aCard.style.display = "flex"
    $aCard.style.alignItems = "center"
    $aCard.style.textAlign  = "center"
    $aCard.style.flexDirection = "column"
    $divCard.append($aCard)    

    const firstName = document.createElement ("h1")
    firstName.textContent = "First name : " + users[i].firstName
    firstName.style.fontSize ="21px"
    $aCard.append(firstName)

    const lastName = document.createElement ("h1")
    lastName.textContent = "Last name : " + users[i].lastName
    lastName.style.fontSize ="21px"
    $aCard.append(lastName)

    const divImg = document.createElement("div")
    divImg.style.width = "fit-content"
    divImg.style.borderRadius = "50px"
    divImg.style.margin = "auto auto 5px auto"
    $aCard.append(divImg)

    const avatar = document.createElement ("img")
    avatar.src = users[i].avatar
    avatar.style.width = "200px"
    avatar.style.height = "200px"
    avatar.style.borderRadius = '100px' 
    $aCard.append(avatar)
}

// affichage formulaire

  