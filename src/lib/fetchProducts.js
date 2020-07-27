
import { axiosInstance } from './axiosInstance';

export function fetchProducts(id,page) {
  return axiosInstance.post('api/products',{pageSize: 50,pageNumber: page,categoryId: id})
      .then(response => {
        return response.data.rows;
      })
      .catch(error => {
        console.log(error);
      });

}

export function fetchProductDetails(productUrl) {
    return axiosInstance.get('api/product?productUrl='+productUrl)
    .then(response => {

        return response.data.attributes;
    })
        .catch(error => {
            console.log(error);
        });

}

