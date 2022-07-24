function grabName(event){
    event.preventDefault()

   input = document.getElementById('new-input').value

   axios.post('/categories/new', {
    name: input
   }).then((response => {
    console.log(response)
   }
   )
   )

   document.getElementById('new-input').value = ''
}