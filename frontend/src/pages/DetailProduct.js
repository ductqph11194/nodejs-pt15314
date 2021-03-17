import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from '../utils.js';

const DetailProduct = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);


    return /*html*/ `  
      <div class="row">
          <div class="col-6">
            <img  src="${product.image}" alt="" height="500px" witdh="473">
          </div>
          <div class="col-6">
            <h1>${product.name}</h1>
            <p>${product.detail}</p>
            <h3>${product.price}đ</h3><br>
           <button class="btn btn-danger"><strong>MUA NGAY</strong></button>
          </div>
      </div>  `
  }
}
export default DetailProduct;