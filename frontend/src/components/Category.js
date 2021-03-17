import CategoryAPI from '../api/CategoryAPI.js';

import { $, reRender } from '../utils.js';

const Category = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        return /*html*/`
        <table class="table table-striped table-sm">
       <h3>Danh mục</h3>
       <a href="#/addcategori" class="btn btn-warning">Thêm danh mục  </a> 
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th width="200">Action</th>
          </tr>
        </thead>
        <tbody>
            ${categories.map((cate, index) => {
            return `
                <tr>
                    <td>${index}</td>
                    <td>${cate.name}</td>
                    <td ><img src="${cate.image}" height="100px" alt="" > </td>
                    <td>
                        <a href="/#/editcategori/${cate.id}" class="btn btn-primary">Update    </a>     
                        <button class="btn btn-danger btn-remove" data-id="${cate.id}">Delete   </button>              
                    </td>
                    
              </tr>
                `
        }).join("")}
        </tbody>
      </table>

        `

    },
    async afterRender() {
        const btns = $('#main-content .btn-remove');

        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('bạn muốn xóa hay không ');
                if (question) {
                    await CategoryAPI.remove(id);
                    await reRender(Category, '#main-content')
                }

            })
        })
    }
}
export default Category;