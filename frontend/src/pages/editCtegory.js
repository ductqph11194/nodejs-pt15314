import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl, $ } from '../utils.js';
import firebase from '../firebase';
import CategoryAPI from '../api/CategoryAPI'
const EditCategpori = {

    async render() {
        const { id } = parseRequestUrl();
        const { data: categori } = await CategoryAPI.get(id);

        return /*html*/ `
        <form id="form-update-product">
            <div class="mb-3">
                <label for="product-name" class="form-label" >Ctegori Name</label>
                <input type="text" class="form-control" id="product-name"value="${categori.name}" aria-describedby="emailHelp">
              
            </div>
            <div class="mb-3">
    <label for="product-image" class="form-label" >Ảnh</label>
    <input type="file" class="form-control" id="product-image"  placeholder="Ảnh sản phẩm">
    <input type="hidden" name="" id="uppdate-hidden-url"  value="${categori.image}">
    <img src="${categori.image} "height="100px" alt="" >
  
</div>
   
            
        
            <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: product } = await CategoryAPI.get(id);

        $('#form-update-product').addEventListener('submit', (e) => {

            e.preventDefault();
            if ($("#product-image").value == "") {

                const newProduct = {
                    ...product,
                    name: $('#product-name').value,

                    image: $("#uppdate-hidden-url").value,
                }
                ProductApi.update(id, newProduct);
                window.location.hash = '/categories'

            }
            else {
                const productImage = $("#product-image").files[0];
                let storageRef = firebase.storage().ref(`images / ${productImage.name}`);
                storageRef.put(productImage).then(function () {
                    storageRef.getDownloadURL().then((url) => {
                        const newProduct = {
                            ...product,
                            name: $('#product-name').value,
                            image: url,
                        }
                        ProductApi.update(id, newProduct);
                        window.location.hash = '/categories'
                    });
                });
            }
        })
    }
}


export default EditCategpori;