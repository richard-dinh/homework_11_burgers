let undevoured = document.getElementById('undevoured')
let devoured = document.getElementById('devoured')

//render undevoured Burgers
const renderBurgers = () => {
  // empty out list before rendering
  undevoured.innerHTML = ''
  devoured.innerHTML = ''
  //render undevoured burgers
  axios.get('/api/burgers/undevoured')
    .then(({ data }) => {
      data.forEach(burger => {
        let burgerNode = document.createElement('a')
        burgerNode.classList.add("list-group-item", "list-group-item-action")
        burgerNode.setAttribute('id', `${burger.burger_id}`)
        burgerNode.innerHTML = `
        ${burger.burger_name} <span class = "spanStyle"><button type="button" class="btn btn-danger btn-sm delete">x</button></span>
        `
        //giving the element an attribute equal to the devoured value in the db
        burgerNode.dataset.isDevoured = burger.devoured
        undevoured.append(burgerNode)
      })
    })
    .catch(error => console.error(error))
  
  // Render devoured burgers
  axios.get('/api/burgers/devoured')
    .then(({ data }) => {
      data.forEach(burger => {
        let burgerNode = document.createElement('a')
        burgerNode.classList.add("list-group-item", "list-group-item-action")
        burgerNode.setAttribute('id', `${burger.burger_id}`)
        burgerNode.innerHTML = `
        ${burger.burger_name} <span class = "spanStyle"><button type="button" class="btn btn-danger btn-sm delete">x</button></span>
        `
        //giving the element an attribute equal to the devoured value in the db
        burgerNode.dataset.isDevoured = burger.devoured
        devoured.append(burgerNode)
      })
    })
    .catch(error => console.error(error))
}

document.addEventListener('click', event =>{
  let target = event.target
  //checks if an a tag is clicked
  if (target.tagName === 'A') {
    //pass in the id of the burger into the api call
    axios.put(`/api/burgers/${target.id}`, {devoured: !parseInt(target.dataset.isDevoured)})
    .then(() => {
      renderBurgers()
    })
    .catch(error => console.error(error))
  }
  //checks if a button is clicked
  else if(target.tagName ==='BUTTON'){
    event.preventDefault()
    if(target.classList.contains('delete')){
      //check if delete button is pressed
      console.log('delete')
    }else{
      //if not delete, then submit
      console.log('submit')
    }
  }
  

})
renderBurgers()