function grabName(event){
    event.preventDefault()

   input = document.getElementById('new-input').value

   axios.post('/categories/new', {
    name: input
   }).then((response => {
    window.location.href = '/'
   }
   )
   )
}