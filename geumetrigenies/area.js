function calculateArea() {


    const base = getInuptValue('triangle-base')


    // get triangel height value;

    // const heightField = document.getElementById(
    // const heightValueText = heightField.value;
    const height = getInuptValue('triangle-height')
    console.log(height)

    if (isNaN(base) || isNaN(height)) {
        alert('please provide Number')
        return
    }
    const area = 0.5 * base * height;

    setTextValue('triangle-area', area)


}
function calculateRectangleArea() {

    const width = getInuptValue('Rectangle-width')


    // get triangel height value;


    const length = getInuptValue('rectangle-length')


    const area = width * length;


    setTextValue('rectangle-area', area)

}

function getInuptValue(InputId) {

    const InputFeild = document.getElementById(InputId);
    const InputValueText = InputFeild.value;
    const Input = parseFloat(InputValueText)

    return Input

}



function setTextValue(InnerText, area) {
    const textElment = document.getElementById(InnerText)
    textElment.innerText = area
}