function getProductDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get("id");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        parseProductDetails(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open("GET", "https://diwserver.vps.webdock.cloud/products/" + productId, true);
    xmlhttp.send();
  }
  
  function parseProductDetails(product) {
    var nomeProduto = document.getElementById("nomeProduto");
    var imgProduto = document.getElementById("imgProduto");
    var precoProduto = document.getElementById("precoProduto");
    var categoriaProduto = document.getElementById("categoriaProduto");
    var descricaoProduto = document.getElementById("descricaoProduto");
  
    nomeProduto.textContent = product.title;
    imgProduto.src = product.image;
    precoProduto.textContent = "Preço: $" + product.price;
    categoriaProduto.textContent = "Categoria: " + product.category;
    descricaoProduto.textContent = "Descrição: " + product.description;
  }
  
  getProductDetails();
  