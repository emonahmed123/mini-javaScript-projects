const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json()
  const phoneData = data.data
  console.log(phoneData)
  displayData(phoneData)
}











const displayData = phones => {
  const container = document.getElementById('phones-container');
  container.innerText = ''
  phones = phones.slice(0, 5)
  phones.forEach(phone => {

    const phoneCard = document.createElement("div");


    phoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `<figure class="px-10 pt-10">
       
    <img
          src="${phone.image}" 
          alt="${phone.phone_name}"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>`;
    console.log(phoneCard)
    container.appendChild(phoneCard)
  });

}


const handleSearch = () => {
  const searchFeild = document.getElementById('search-Feild')

  const searchText = searchFeild.value;
  loadPhone(searchText)
}



