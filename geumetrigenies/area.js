function calculateArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value
    const base = parseFloat(baseValueText)


    // get triangel height value;

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)
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