import productsResponse from "./json/products.json"


const NEED_TRY_LOAD = true;
const products = productsResponse.products;
const cash = {}


export function sleep(ms = 500) {
  return new Promise((resolve, _) => setTimeout(() => resolve(), ms));
}


export async function get({ url, getDefault, handleResult }) {
  if (!NEED_TRY_LOAD)  {
    await sleep();
    return getDefault();
  }

  if (cash[url]) {
    return cash[url];
  }

  try {
    const response = await fetch(url);
    const json = await response.json();
    const result = handleResult(json);
    cash[url] = result;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return getDefault();
  }
}


export function getProducts({ page, limit, category }) {

  const isCategoryValid = category && category != "Все";
  
  const url = isCategoryValid
    ? `https://fakestoreapi.in/api/products/category?type=${category}&page=${page}&limit=${limit}`
    : `https://fakestoreapi.in/api/products?page=${page}&limit=${limit}`;

  return get({
    url,
    getDefault: () => {
      const from = (page - 1) * limit;
      const to = from + limit;
      const filtered = isCategoryValid
        ? products.filter(product => product.category === category)
        : products;
      return filtered.slice(from, to);
    },
    handleResult: (json) => {
      return json.products;
    }
  });
}


export function getProductById({ id }) {
  const url = `https://fakestoreapi.in/api/products/${id}?arg=fake`;

  console.log(url);

  return get({
    url,
    getDefault: () => {
      return products.find(product => product.id == id);
    },
    handleResult: (json) => {
      const product = json.product;
      return product.id === id ? product : null;
    }
  });
}