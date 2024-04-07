const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json()
    const phones = data.data
    displayData(phones)
}

const displayData = (phones) => {

    console.log(phones)

}






loadPhone()

