document.getElementById('button-deposit').addEventListener('click', function (e) {
    e.preventDefault()
    const depositField = document.getElementById('deposit-feild')

    const NewdepositAmountString = depositField.value;
    console.log(typeof (NewdepositAmountString))
    if (NewdepositAmountString === '') {
        return alert('  input de')
    }
    const NewdepositAmountNum = parseFloat(NewdepositAmountString)
    if (NewdepositAmountNum < 0 || NewdepositAmountNum === '') {
        return alert(' taka de ')
    }

    const depositTotalElement = document.getElementById('deposit-total')


    const PreveousDepostiTotal = parseFloat(depositTotalElement.innerText);
    const cureenTotal = PreveousDepostiTotal + NewdepositAmountNum
    depositTotalElement.innerText = cureenTotal


    //  total blance

    const totalBlance = document.getElementById('total-blance')
    const previesTotalString = totalBlance.innerText
    const previesTotal = parseFloat(previesTotalString)

    const newTotal = previesTotal + NewdepositAmountNum

    totalBlance.innerText = newTotal



    depositField.value = ''

})