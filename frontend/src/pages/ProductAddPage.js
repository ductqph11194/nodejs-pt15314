import ProductApi from '../api/ProductApi.js';
import { $, } from '../utils.js';
import firebase from '../firebase';
import CategoryAPI from '../api/CategoryAPI'

const ProductAddPage = {

    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/ `
        <form id="form-add" >
        <div class="mb-3">
            <input type="text" class="form-control" id="product-name" placeholder="Tên sản phẩm">
            
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="price" placeholder="Gía">
            
        </div>
        <div class="mb-3">
            <input type="file" class="form-control" id="product-image" placeholder="Ảnh sản phẩm">
            
        </div>
        <div class="mb-3">
        <textarea type="text" class="form-control" id="detail" placeholder="Chi tiết sản phẩm"></textarea>
        
            </div>
            <div class="mb-3">
            <label for="categori" class="form-label" >Categori</label>
           
            <select name="" id="categori" class=" p-2">${categories.map((categori) => {
            return `
                <option value="${categori.id}">${categori.name}</option>
                `
        })}</select>
          
        </div>
       
     
        <input type="submit" class="btn btn-primary" Value="Thêm">
        </form>
        `
    },
    afterRender() {
        $("#form-add").addEventListener("submit", (e) => {
            e.preventDefault();
            const productImage = $("#product-image").files[0];
            let storageRef = firebase.storage().ref(`images / ${productImage.name}`);
            storageRef.put(productImage).then(function () {
                storageRef.getDownloadURL().then((url) => {

                    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $("#product-name").value,
                        price: $("#price").value,
                        image: url,
                        detail: $("#detail").value,
                        categoryId: $("#categori").value
                    };
                    ProductApi.add(product);
                    window.location.hash = '/listproducts'
                });
            });
        });
    },
}
export default ProductAddPage;

