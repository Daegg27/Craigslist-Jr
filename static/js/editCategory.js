function changeName(event, id){
    event.preventDefault()

    input = document.getElementById('input-field')

    value = input.value

    axios.put(`/categories/${id}`, {
        name: value
    }).then((response =>{
        window.location.href = '/'
    }))
}