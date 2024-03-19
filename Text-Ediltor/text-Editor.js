


document.getElementById('Blod').addEventListener('click', function () {

    document.getElementById('TextEidtor').classList.toggle('bal')



})
document.getElementById('Italic').addEventListener('click', function () {

    let dkdf = document.getElementById('TextEidtor')

    if (dkdf.style.fontStyle == "italic") {
        dkdf.style.fontStyle = "normal"
    }
    else {
        dkdf.style.fontStyle = " italic"
    }


})
document.getElementById('text-center').addEventListener('click', function () {

    document.getElementById('TextEidtor').classList.toggle('text_centers')



})



document.getElementById('color').addEventListener('change', function (e) {

    document.getElementById('TextEidtor').style.color = e.target.value

})








