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
    const widthField = document.getElementById('Rectangle-width');
    const widthValueText = widthField.value
    const width = parseFloat(widthValueText)


    // get triangel height value;

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText)


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