document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function () {
      var searchText = searchInput.value.toLowerCase();
      var products = Array.from(document.querySelectorAll(".product"));
  
      products.forEach(function (product) {
        var productName = product.querySelector("h5").textContent.toLowerCase();
        if (productName.includes(searchText)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  
    loadJSON();
  });
  
  function loadJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        parseResponse(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open("GET", "https://diwserver.vps.webdock.cloud/products?page=4&page_items=21", true);
    xmlhttp.send();
  }
  
  function parseResponse(response) {
    var products = response.products;
    var section = document.getElementById("productSection");
    section.innerHTML = ""; // Limpar os produtos anteriores
  
    products.forEach(function (product) {
      var productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.style.border = '1px solid #A9A9A9';
      productDiv.style.borderRadius = '10px';
      productDiv.style.textAlign = 'center';
      productDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'
  
      var imgProduto = document.createElement("img");
      imgProduto.src = product.image;
      imgProduto.style.marginTop = '20px';
      imgProduto.style.marginBottom = '20px'
      imgProduto.style.width = '20%';
      imgProduto.addEventListener("click", function () {
        redirectToDetails(product.id);
      });
      productDiv.appendChild(imgProduto);
  
      var nomeProduto = document.createElement("h5");
      nomeProduto.textContent = product.title;
      productDiv.appendChild(nomeProduto);
  
      var precoProduto = document.createElement("p");
      precoProduto.textContent = "Preço: $" + product.price;
      productDiv.appendChild(precoProduto);
  
      var categoriaProduto = document.createElement("p");
      categoriaProduto.textContent = "Categoria: " + product.category;
      productDiv.appendChild(categoriaProduto);
  
      section.appendChild(productDiv);
    });
  }
  
  function redirectToDetails(productId) {
    window.location.href = "detalhes.html?id=" + productId;
  }
  