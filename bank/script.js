document.getElementById('button-sub').addEventListener('click', function () {

    const emailvalue = document.getElementById('user-email');
    const email = emailvalue.value
    const passwordFild = document.getElementById('user-password')
    const password = passwordFild.value
    console.log(email)

    if (email === 'imon@.com' && password === '123') {
        window.location.href = 'bank.html'
    }
    else {
        alert('fuck you')
    }
})