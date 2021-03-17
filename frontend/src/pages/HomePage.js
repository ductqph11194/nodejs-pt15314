import CategoryAPI from '../api/CategoryAPI.js';
import ProductApi from '../api/ProductApi.js';
const HomePage = {
  async render() {

    const { data: products } = await ProductApi.getAll();
    const { data: categories } = await CategoryAPI.getAll();


    return /*html*/`
    <img src="https://9design.com.vn/wp-content/uploads/2019/07/banner-dai-duoi-1-1.jpg" width="100%" alt="">
   <div class="row" style="margin-top:20px;">
     
      ${categories.map(category => {
      return /*html*/ `<div class="col">
      <a href="/#/category/${category.id}"><img src="${category.image}" height="150px" width="170px" style="padding-left:10px;" alt=""></a></div>  `
    }).slice(0, 5).join("")}  
      
   </div>
   <div>
        <h3 style="padding-top: 20px;"> Iphone Nổi bật</h3></div>
            <div class="row">
            
              ${products.filter(product => product.categoryId == 2).map(product => {

      return /*html*/`
                    <div class="col-3" style="padding-top: 20px;">
                      <a href="/#/products/${product.id}">
                      <div class="card"">
                        
                      <img src="${product.image}" height="320" width="170" class="card-img-top" alt="...">
                      </a>
                      <div class="card-body">
                      <a href="/#/products/${product.id}"> <strong> ${product.name}</strong> </a>
                          <p class="card-text" style="color:red;text-align:center;">${product.price}đ</p>
                          <button class="btn btn-danger" style="margin-left:90px;">Add to cart</button>
                              
                      </div>
                  </div>  
                      
                    </div>`

    }).slice(0, 4).join("")}
              </div>           
               
             <h3 style="padding-top: 20px;"> SAMSUNG</h3></div>
            <div class="row">
            
              ${products.filter(product => product.categoryId == 3).map(product => {

      return /*html*/`
                    <div class="col-3" style="padding-top: 20px;">
                      <a href="/#/products/${product.id}">
                      <div class="card"">
                        
                      <img src="${product.image}" height="320" width="170" class="card-img-top" alt="...">
                      </a>
                      <div class="card-body">
                      <a href="/#/products/${product.id}"> <strong> ${product.name}</strong> </a>
                      <script>function formatNumber(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                      }</script>
                          <p class="card-text" style="color:red;text-align:center;">${product.price}.đ</p>
                          <button class="btn btn-danger" style="margin-left:90px;">Add to cart</button>
                              
                      </div>
                  </div>  
                      
                    </div>`

    }).slice(0, 4).join("")}
              </div>
              `


  }
}
export default HomePage;