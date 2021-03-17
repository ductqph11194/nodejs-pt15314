
import CategoryAPI from "../api/CategoryAPI"

const Header = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();

    return /*html*/`
        
        <div class=" bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-12">
                    <button class="btn my-md-4 my-2 boder  text-white">VN</button>
                </div>
                <div class="col-md-4 col-12 text-center ">
                    <h2 class="my-md-3 site-title primary-color text-white">FAKE SHOP</h2>
                </div>

                <div class="col-md-4 col-12  text-right" style="text-align: right;text-decoration:none;">
                    <p class="my-md-4 header-links"></p>
                    <a href="" class="px-2" style="text-decoration: none; color: white;">Đăng nhập</a>
                    <a href="" class="px-1" style="text-decoration: none;color: white;">Đăng kí</a>
                    
                </div>
                </p>
            </div></div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#/">TRANG CHỦ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/products">SẢN PHẨM</a>
        </li>
       
        ${categories.map(category => { return ` <li class="nav-item"> <a class="nav-link" aria-current="page" href="/#/category/${category.id}" style="text-decoration: none;" >${category.name}</a> </li>` }).slice(0, 5).join("")}  
       
        <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#/contact">Liên hệ</a>
    </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/listproducts">quản lí</a>
      </li> 
     
      </ul>
      <form class="d-flex">
       
        <button class="btn btn-outline-success" type="submit"> <i class="fas fa-search" style="color:black;"></i></button>
        <button class="btn btn-outline-success" type="submit"> <i class="fas fa-shopping-cart" style="color:black;"></i></button>
      </form>
      
    </div>
    
  </div>
</nav>
        </div>
        `
  }
}
export default Header;