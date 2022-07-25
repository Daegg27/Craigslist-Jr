function editPost(event, id){
    event.preventDefault()

    let newPost = {}

    for (let i = 0; i < event.target.length - 1; i++){
        console.log(event.target[i].id, event.target[i].value)

        newName = event.target[i].id
        value = event.target[i].value

        newPost[newName] = value
    }

    axios.put(`/posts/${id}`, newPost)
    .then((response => {
        console.log(response)
    }
    ))

}

function deletePost(id, category_id){
    

    axios.delete(`/posts/${id}`, { data: { id: id } })
    .then((response) => {
        window.location.href = `/categories/${category_id}/view`
    })
}