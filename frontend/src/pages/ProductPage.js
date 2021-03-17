import ProductApi from '../api/ProductApi.js';

const ProductPage = {

    async render() {

        const { data: products } = await ProductApi.getAll();


        return /*html*/`
        <div class="gt">
        <h2>Sản phẩm </h2>
        </div>
            <div class="row">
                ${products.map(product => {

            return /*html*/`
                        <div class="col-3" style="padding-top: 20px;">
                            <div class="card"">
                                <img src="${product.image}" height="320" width="170" class="card-img-top" alt="...">
                                <div class="card-body">
                                <a href="/#/products/${product.id}">  <strong> ${product.name}</strong> </a>
                                <p class="card-text" style="color:red;text-align:center;">${product.price}đ</p>
                                <button class="btn btn-danger" style="margin-left:90px;">Add to cart</button>
                                </div>
                            </div>  
                        </div>`
        }).join("")}
            </div>`
    }

}
export default ProductPage;