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