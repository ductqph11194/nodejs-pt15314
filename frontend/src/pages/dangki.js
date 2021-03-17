import UserAPI from '../api/UserAPI.js';
import { $, } from '../utils.js';

const LoginPage = {

    async render() {

        return /*html*/`
        <form id="dangki">
                <div class="mb-3">
                    <label for="tentk" class="form-label">Tên tài khoản</label>
                    <input type="text" class="form-control" id="tentk" aria-describedby="emailHelp">
                   
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">mật khẩu</label>
                    <input type="password" class="form-control" id="pass">
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">nhập lại mật khẩu</label>
                <input type="password" class="form-control" id="exampleInputPassword2">
            </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
</form>
        `
    },
    afterRender() {
        $("#dangki").addEventListener("submit", (e) => {
            e.preventDefault();


            const taikhoan = {
                id: Math.random().toString(36).substr(2, 9),
                tentk: $("#tentk").value,
                pass: $("#pass").value,


            };
            UserAPI.add(taikhoan);
            alert("đăng kí thành công ");


        });
    },

}
export default LoginPage;