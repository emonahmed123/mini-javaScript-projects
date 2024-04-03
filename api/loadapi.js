function fecthData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => loadData(json))


}

function loadData(params) {

    console.log(params)
}