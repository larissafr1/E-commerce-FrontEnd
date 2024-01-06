
// Faz uma requisição GET para obter a lista de produtos
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Itera sobre cada produto e exibe os dados
    products.forEach(product => {
      console.log('Nome:', product.title);
      console.log('Descrição:', product.description);
      console.log('Preço:', product.price);
      console.log('');

      // Cria um elemento de imagem
      const img = document.createElement('img');
      img.src = product.image;

      // Adiciona a imagem ao documento
      document.body.appendChild(img);

      console.log('---');
    });
  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });


  

  // Função para obter dados da API
async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Função para exibir os produtos na página inicial
async function displayProducts() {
  const products = await getProducts();
  const productList = document.getElementById('product-list');

  products.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    productItem.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = product.title;
    productItem.appendChild(title);

    const price = document.createElement('p');
    price.textContent = 'Price: $' + product.price;
    productItem.appendChild(price);

    const description = document.createElement('p');
    description.textContent = product.description;
    productItem.appendChild(description);

    const detailsLink = document.createElement('a');
    detailsLink.href = 'detalhes.html?id=' + product.id; // Passa o id do produto como parâmetro na URL
    detailsLink.textContent = 'View Details';
    productItem.appendChild(detailsLink);

    productList.appendChild(productItem);
  });
}

// Chama a função para exibir os produtos na página inicial
displayProducts();


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    const productTable = document.getElementById('product-list');
    json.forEach(product => {
      const row = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      nameLink.textContent = product.title;
      nameLink.href = `detalhes.html?id=${product.id}`; 
      nameLink.target = "_blank"; 
      nameCell.appendChild(nameLink);
      row.appendChild(nameCell);

      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = product.image;
      imageCell.appendChild(image);
      row.appendChild(imageCell);

      productTable.querySelector('tbody').appendChild(row);
    });
  })
  .catch(error => console.log(error));


