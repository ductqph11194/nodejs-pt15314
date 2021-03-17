import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl, $ } from '../utils.js';
import firebase from '../firebase';
import CategoryAPI from '../api/CategoryAPI'
const ProductEditPage = {

    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/ `
        <form id="form-update-product">
            <div class="mb-3">
                <label for="product-name" class="form-label" >Product Name</label>
                <input type="text" class="form-control" id="product-name"value="${product.name}" aria-describedby="emailHelp">
              
            </div>
            <div class="mb-3">
                <label for="detail" class="form-label" >Detail</label>
                <input type="text" class="form-control" id="detail"value="${product.detail}" aria-describedby="emailHelp">
              
            </div>
            <div class="mb-3">
            <label for="categori" class="form-label" >Categori</label>
           
            <select name="" id="categori" class="border-2 border-gray-200 p-2">${categories.map((categori) => {
            return `
                <option value="${categori.id}">${categori.name}</option>
                `
        })}</select>
          
        </div>
        <div class="mb-3">
        <label for="price" class="form-label" >Price</label>
        <input type="text" class="form-control" id="price"value="${product.price}" aria-describedby="emailHelp">
      
    </div>
    <div class="mb-3">
    <label for="price" class="form-label" >Ảnh</label>
    <input type="file" class="form-control" id="product-image"  placeholder="Ảnh sản phẩm">
    <input type="hidden" name="" id="uppdate-hidden-url"  value="${product.image}">
    <img src="${product.image} "height="100px" alt="" >
  
</div>
            
        
            <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        $('#form-update-product').addEventListener('submit', (e) => {

            e.preventDefault();
            if ($("#product-image").value == "") {

                const newProduct = {
                    ...product,
                    name: $('#product-name').value,
                    price: $('#price').value,
                    detail: $("#detail").value,
                    categoryId: $("#categori").value,
                    image: $("#uppdate-hidden-url").value,
                }
                ProductApi.update(id, newProduct);
                window.location.hash = '/listproducts'

            }
            else {
                const productImage = $("#product-image").files[0];
                let storageRef = firebase.storage().ref(`images / ${productImage.name}`);
                storageRef.put(productImage).then(function () {
                    storageRef.getDownloadURL().then((url) => {
                        const newProduct = {
                            ...product,
                            name: $('#product-name').value,
                            price: $('#price').value,
                            detail: $("#detail").value,
                            categoryId: $("#categori").value,
                            image: url,
                        }
                        ProductApi.update(id, newProduct);
                        window.location.hash = '/listproducts'
                    });
                });
            }
        })
    }

}


export default ProductEditPage;