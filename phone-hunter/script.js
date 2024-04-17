const loadPhone = async (searchText, showalldata) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json()
  const phoneData = data.data
  console.log(phoneData)
  displayData(phoneData, showalldata)
}











const displayData = (phones, showAlldata) => {
  const container = document.getElementById('phones-container');
  container.innerText = ''
  const showAll = document.getElementById('show-all-container');
  console.log(showAlldata)
  if (phones.length > 12 && !showAlldata) {
    showAll.classList.remove("hidden")
  }
  else {
    showAll.classList.add("hidden")
  }

  if (!showAlldata) {
    phones = phones.slice(0, 5)
  }
  else {

  }


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
          <button onclick="handleShowDetail('${phone.slug}');my_modal_3.showModal()"class="btn btn-primary">Show Detail</button>
        </div>
      </div>`;
    console.log(phoneCard)
    container.appendChild(phoneCard)
  });
  togleLoading(false)
}


const handleSearch = (showalldata) => {
  togleLoading(true)
  const searchFeild = document.getElementById('search-Feild')

  const searchText = searchFeild.value;
  loadPhone(searchText, showalldata)
}

const togleLoading = (isLoding) => {

  const loadingSpiner = document.getElementById("loading")



  if (isLoding) {
    loadingSpiner.classList.remove("hidden")
  }
  else {
    loadingSpiner.classList.add("hidden")
  }

}


const handleShowDetail = async (id) => {
  console.log('showdeatali', id)

  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phoneDetails = data.data;


}

const handleShowAll = () => {
  handleSearch(true)
}

// this is code