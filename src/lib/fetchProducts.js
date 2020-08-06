import axios from 'axios';

export function fetchProducts() {
  return axios.get('/data/ProductData.json')
      .then(response => {
        return response.data.Products;
      })
      .catch(error => {
        console.log(error);
      });

}

export function fetchProductDetails(productUrl) {

    return axios.get("/data/ProductData.json")
        .then(response => {
            const ProductDetail = response.data.Products.filter(product => {
                return product.Id == productUrl
            });
            return ProductDetail;
        })
        .catch(error => {
            console.log(error);
        });

}



// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
