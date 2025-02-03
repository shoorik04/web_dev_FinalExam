// ---------- X ღილაკმა გააქროს რეკლამა -------------

const closeButton = document.querySelector(".header_register_X");
const container = document.querySelector(".container_header_register");
closeButton.addEventListener("click", () => {
  container.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const galery = document.getElementById("container_content_cards");
  // ----------- ამის ქვემოთ კოდის ნაწილი საძიებო ველის ფუნქციონალს ეხება -----
  const searchBar = document.getElementById("searchBar");
  const searchResults = document.getElementById("searchResults");
  let allProducts = [];

  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      allProducts = data.slice(0, 8);

      allProducts.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src = '${product.image}',
      <div class='description'>
      <p class='product_title'> ${product.title} </p> </div>
      <div class='price'> $${product.price}</div> `;
        galery.append(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  searchBar.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();
    searchResults.innerHTML = "";

    if (searchText === "") return;

    const fillteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );

    fillteredProducts.forEach((product) => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("card1");
      resultDiv.innerHTML = `
      <img src="${product.image}" />
        <div class="description">
          <p class="product_title">${product.title}</p>
        </div>
        <div class="price">$${product.price}</div>
      `;
      searchResults.append(resultDiv);
    });
  });
});
