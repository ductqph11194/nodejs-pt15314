const SidebarMenu = {
  render() {
    return /*html*/ `
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/listproducts">
                  <span data-feather="file"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/categories">
                  <span data-feather="file"></span>
                Categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/listcontact">
                  <span data-feather="file"></span>
                Contact
                </a>
              </li>
             
            </ul>
    
           
          </div>
            `
  }
}
export default SidebarMenu;