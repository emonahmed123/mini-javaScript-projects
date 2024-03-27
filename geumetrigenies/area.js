function calculateArea() {


    const base = getInuptValue('triangle-base')


    // get triangel height value;

    // const heightField = document.getElementById(
    // const heightValueText = heightField.value;
    const height = getInuptValue('triangle-height')
    console.log(height)

    const area = 0.5 * base * height;

    const triangelArea = document.getElementById('triangle-area');

    triangelArea.innerText = area

}
function calculateRectangleArea() {

    const width = getInuptValue('Rectangle-width')


    // get triangel height value;


    const length = getInuptValue('rectangle-length')


    const area = width * length;

    const reaiangelArea = document.getElementById('rectangle-area');

    reaiangelArea.innerText = area

}

function getInuptValue(InputId) {

    const InputFeild = document.getElementById(InputId);
    const InputValueText = InputFeild.value;
    const Input = parseFloat(InputValueText)

    return Input

}