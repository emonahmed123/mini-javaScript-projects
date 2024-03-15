document.getElementById('button-sub').addEventListener('click', function (e) {
    e.preventDefault()
    const emailvalue = document.getElementById('user-email');
    const email = emailvalue.value
    const passwordFild = document.getElementById('user-password')
    const password = passwordFild.value
    console.log(email)

    if (email === 'imon@gmail.com' && password === '123') {
        window.location.href = 'bank.html'
    }
    else {
        alert('fuck you')
    }
})