import ProductApi from '../api/ProductApi.js';
import { $, reRender } from '../utils.js';

const ListProduct = {
  async render() {
    const { data: products } = await ProductApi.getAll();
    return /*html*/`
        <table class="table table-striped table-sm">
       <h3>Sản phẩm</h3>
       <a href="#/addproduct" class="btn btn-warning">Thêm sản phẩm   </a> 
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th width="200">Action</th>
          </tr>
        </thead>
        <tbody>
            ${products.map((product, index) => {
      return `
                <tr>
                    <td>${index}</td>
                    <td>${product.name}</td>
                    <td ><img src="${product.image}" height="100px" alt="" > </td>
                    <td>${product.price}</td>
                    <td>
                        <a href="/#/editproduct/${product.id}" class="btn btn-primary">Update    </a>     
                        <button class="btn btn-danger btn-remove" data-id="${product.id}">Delete   </button>              
                    </td>
                    
              </tr>
                `
    }).join("")}
        </tbody>
      </table>

        `

  },
  async afterRender() {
    const btns = $('#list-products .btn-remove');

    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', async function () {
        const question = confirm('bạn muốn xóa hay không ');
        if (question) {
          await ProductApi.remove(id);
          await reRender(ListProduct, '#list-products')
        }

      })
    })
  }
}
export default ListProduct;