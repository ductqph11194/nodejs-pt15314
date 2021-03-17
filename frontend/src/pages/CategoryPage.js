import CategoryAPI from "../api/CategoryAPI";
import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils"

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();

        const { data: products } = await ProductApi.getAll();
        const { data: categories } = await CategoryAPI.get(id);

        const result = products.filter(product => product.categoryId == id)
            .map(product => {
                return /*html*/ ` 
                
               
                 <div class="col-3" style="padding-top: 20px;">
                 <div class="card"">
                 <img src="${product.image}" height="320" width="170" class="card-img-top" alt="...">
                 <div class="card-body">
                 <a href="/#/products/${product.id}">  <strong> ${product.name}</strong> </a>
                 <p class="card-text" style="color:red;text-align:center;">${product.price}đ</p>
                 <button type="button" class="btn btn-danger" style="margin-left:90px;">Add to cart</button>
                 </div>
             </div>   
                        </div>
                        `
            }).join("");

        return /*html*/ ` <div class="row">
        <h3>${categories.name}</h3>
        ${result} </div>`

    }

}
export default CategoryPage;