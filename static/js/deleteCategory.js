function goodbyePost(id){


    axios.delete(`/categories/${id}`, { data: { id: id } })
    .then((response) => {
        window.location.href = `/`
    })
}