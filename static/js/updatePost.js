function editPost(event, id, category_id){
    event.preventDefault()

    let newPost = {}

    for (let i = 0; i < event.target.length - 1; i++){
        

        newName = event.target[i].id
        value = event.target[i].value

        newPost[newName] = value
    }

    axios.put(`/posts/${id}`, newPost)
    .then((response => {
        window.location.href = `/categories/${category_id}/view`
    }
    ))

}

function deletePost(id, category_id){
    

    axios.delete(`/posts/${id}`, { data: { id: id } })
    .then((response) => {
        window.location.href = `/categories/${category_id}/view`
    })
}