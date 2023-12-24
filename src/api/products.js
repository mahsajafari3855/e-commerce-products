const url = "https://fakestoreapi.com";
async function getResponse({ path, method = "GET" }) {
  const response = await fetch(`${url}${path}`, {
    method,
  });
  const data = await response.json();
  return data;
}
async function getAllProducts() {
  const products = await getResponse({ path: `/products` }).then((res) => {
    return res;
  });
  return products;
}

export { getAllProducts};
