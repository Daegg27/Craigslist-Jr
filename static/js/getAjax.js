function showCategories(){
    axios.get('/categories').then((response => {
        console.log(response)
    }))
}

function showPosts(){
    axios.get('/posts').then((response => {
        console.log(response)
    }))
}

function showOnePost(id){
    axios.get(`/posts/${id}`).then((response => {
        console.log(response)
    }))
}