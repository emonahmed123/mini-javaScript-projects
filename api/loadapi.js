function fecthData(params) {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => loadData(json))

}

function loadData(params) {
    let Container = document.getElementById('container')
    for (user of params) {

        let h1 = document.createElement('h3')
        h1.innerText = `${user.name}`

        Container.appendChild(h1)


    }
}