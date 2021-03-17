import ContactAPI from '../api/ContactAPI.js';
import ProductApi from '../api/ProductApi.js';
import { $, reRender } from '../utils.js';

const ListContact = {
    async render() {
        const { data: ct } = await ContactAPI.getAll();
        return /*html*/`
        <table class="table table-striped table-sm">
       <h3>Contact</h3>
     
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Nội dung</th>
            <th width="200">Action</th>
          </tr>
        </thead>
        <tbody>
            ${ct.map((cate, index) => {
            return `
                <tr>
                    <td>${index}</td>
                    <td>${cate.name}</td>
                    <td>${cate.email}</td>
                    <td>${cate.sdt}</td>
                    <td>${cate.noidung}</td>
                    <td>
                    
                        <button class="btn btn-danger btn-xoa" data-id="${cate.id}">Delete   </button>              
                    </td>
                    
              </tr>
                `
        }).join("")}
        </tbody>
      </table>

        `

    },
    async afterRender() {
        const btns = $('#main-content .btn-xoa');

        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm('bạn muốn xóa hay không ');
                if (question) {
                    await ContactAPI.remove(id);
                    await reRender(ListContact, '#main-content')
                }

            })
        })
    }
}
export default ListContact;