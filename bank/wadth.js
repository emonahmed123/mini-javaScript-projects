document.getElementById('button-withdraw').addEventListener('click', function (e) {
    e.preventDefault()


    const widthdrawFeild = document.getElementById('widthdraw-feild');
    const totalWidthdraw = document.getElementById('widthdraw-total')
    const totalBlanceWithdraw = document.getElementById('total-blance')
    console.log(widthdrawFeild)
    const widthdrawNewnum = parseFloat(widthdrawFeild.value);



    const previesTotals = parseFloat(totalBlanceWithdraw.innerText)
    if (widthdrawNewnum > previesTotals) {

        return alert('TORbAPER ATO TAKA NAI')
    } else if (widthdrawNewnum < 0) {
        return alert('please provite posetive number')
    }
    const totalWidthdrawnum = parseFloat(totalWidthdraw.innerText)

    totalWidthdraw.innerText = totalWidthdrawnum + widthdrawNewnum

    const verynew = previesTotals - widthdrawNewnum
    totalBlanceWithdraw.innerText = verynew

    widthdrawFeild.value = ''

})