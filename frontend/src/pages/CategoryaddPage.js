import ProductApi from '../api/ProductApi.js';
import { $, parseRequestUrl } from '../utils.js';
import firebase from '../firebase';
import CategoryAPI from '../api/CategoryAPI'
const CategoryaddPage = {

    async render() {

        return /*html*/ `
        <form id="form-add">
        <div class="mb-3">
            <input type="text" class="form-control" id="product-name" placeholder="Tên sản phẩm">
            
        </div>
        <div class="mb-3">
            <input type="file" class="form-control" id="product-image" placeholder="Ảnh sản phẩm">
            
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
                    const categori = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $("#product-name").value,
                        image: url,
                    };
                    CategoryAPI.add(categori);
                    window.location.hash = '/categories'
                });
            });

        });
    },
}
export default CategoryaddPage;

