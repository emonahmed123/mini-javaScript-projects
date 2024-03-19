
function getInputValuesById(inputid) {
    const inputField = document.getElementById(inputid)
    const inputFieldValueString = inputField.value
    const inputFieldValueNumber = parseFloat(inputFieldValueString)
    inputField.value = ''
    return inputFieldValueNumber
}

function getElemenValuetById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString)
    return value
}
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString)

    return textElementValue
}

function seTextElementValuById(elementId, newValue) {

    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue

}

document.getElementById('button-deposit').addEventListener('click', function (e) {
    e.preventDefault()
    const newDepositAmount = getInputValuesById('deposit-feild');

    const priviourDepositeTotal = getTextElementValueById("deposit-total")

    const newDpositTotal = priviourDepositeTotal + newDepositAmount
    seTextElementValuById('deposit-total', newDpositTotal)
})