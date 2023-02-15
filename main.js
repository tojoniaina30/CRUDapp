let users = []

async function getData () {
  await fetch('http://localhost:3000/users')
  .then(async(response) => {
    const data = await response.json()
    users = data
  })

}

 /*  for (var i = 0; i < data.length; i++) {
    const $div = document.createElement("div");
    document.body.append($div)
    const $link = document.createElement("a");
    $div.append($link)
    const show = data[i].firstName
    console.log(show)
  } */
await getData();
console.log (users)