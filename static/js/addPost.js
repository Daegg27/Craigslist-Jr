function createPost(event, id){
    event.preventDefault()

    let newPost = {}
    newPost.id = id

    for (let i = 0; i < event.target.length - 1; i++){
        console.log(event.target[i].id, event.target[i].value)

        newName = event.target[i].id
        value = event.target[i].value

        newPost[newName] = value
    }

    axios.post('/posts/', newPost)
    .then((response => {
        console.log(response)
    }
    ))

}