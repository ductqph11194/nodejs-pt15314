import HomePage from './pages/HomePage.js';
import { parseRequestUrl, $ } from './utils.js';
import DetailProduct from './pages/DetailProduct.js';
import ProductPage from './pages/ProductPage.js';
import Error404Page from './pages/Error404Page.js';
import AdminProductPage from './pages/AdminProductPage.js'
import Header from './components/Header.js'
import Category from './components/Category.js'
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import CategoryaddPage from './pages/CategoryaddPage.js';
import EditCategpori from './pages/editCtegory.js';
import Contact from './pages/contact.js';
import ListContact from './components/Contact.js';
import LoginPage from './pages/dangki.js';


//tạo đường dẫn
const routes = {
    '/': HomePage,
    '/products': ProductPage,
    '/products/:id': DetailProduct,
    '/listproducts': AdminProductPage,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/editproduct/:id': ProductEditPage,
    '/categories': Category,
    '/addcategori': CategoryaddPage,
    '/editcategori/:id': EditCategpori,
    '/contact': Contact,
    '/listcontact': ListContact,
    '/dangki': LoginPage,
}

const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    if (page.afterRender) {
        await page.afterRender();
    }

}
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
