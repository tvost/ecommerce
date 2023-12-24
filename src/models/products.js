const generateRandomProduct = (id) => {
    const randomName = `Produto ${id}`;
    const randomDescription = `Descrição do ${randomName}`;
    const randomPrice = (Math.random() * (200 - 50) + 50).toFixed(2); // Gera um preço aleatório entre 50 e 200
    const randomImageNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = `url_da_imagem_${randomImageNumber}.jpg`;
  
    return {
      id,
      name: randomName,
      description: randomDescription,
      price: parseFloat(randomPrice), // Convertemos para float aqui
      image: randomImage,
    };
  };
  
  const products = Array.from({ length: 50 }, (_, index) => generateRandomProduct(index + 1));
  
  export default products;