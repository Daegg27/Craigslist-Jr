function createPost(event, id){
    event.preventDefault()

    let newPost = {}
    newPost.id = id

    for (let i = 0; i < event.target.length - 1; i++){
        

        newName = event.target[i].id
        value = event.target[i].value

        newPost[newName] = value
    }

    axios.post('/posts/', newPost)
    .then((response => {
        console.log('yes')
        window.location.href = `/categories/${id}/view`
    }
    ))

}