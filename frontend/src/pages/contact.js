import ContactAPI from '../api/ContactAPI.js';
import { $, } from '../utils.js';
const Contact = {
    async render() {




        return /*html*/ `
        <div class="row">
        <form id="form-add-contact">
                <div class="mb-3">
                    <label for="mail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="mail" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                <label for="hoten" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" id="hoten" aria-describedby="emailHelp">

                 </div>
                 <div class="mb-3">
                <label for="sdt" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="sdt" aria-describedby="emailHelp">

                 </div>
                <div class="mb-3">
                    <label for="nd" class="form-label">Nội dung</label>
                    <textarea class="form-control" id="nd" aria-label="With textarea"></textarea>
                </div>
               
                <button type="submit" class="btn btn-primary">Gửi phản hồi</button>
            </form>
        </div>
        <div class="row" style="padding-top: 20px;">
            <div class="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4227.261540764893!2d105.78324794160538!3d20.42541424246214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135d4d3301de671%3A0xfe41c73c3b5afb16!2zTmjDoCBUaOG7nSBYw61jaCBUaOG7lQ!5e0!3m2!1svi!2s!4v1614517804767!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
             </div>
             <div class="col-6">
             <p>
             
             <h1>Liên hệ với chúng tôi:</h1>
             <h3> Địa chỉ : <h4> Nhà thờ Xích Thổ-Thôn Minh Long-Xã Xích Thổ-Nho Quan-Ninh Bình</h4></h3>
             </p>
             <h3>Số điện thoại: 0971155903</h3>
             </div>
        </div>
        <section class="u-align-center u-clearfix u-section-1" id="carousel_ba09">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div class="u-clearfix u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-40 u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
              <div class="u-layout-row">
                <div class="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1" data-image-width="1000" data-image-height="1500">
                  <div class="u-container-layout u-container-layout-1"></div>
                </div>
                <div class="u-container-style u-layout-cell u-palette-2-base u-right-cell u-size-30 u-layout-cell-2">
                  <div class="u-container-layout u-valign-middle u-container-layout-2">
                    <div class="u-form u-form-1">
                      <form action="https://nicepage.com/editor/Forms/Process" method="POST" class="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" style="padding: 0px;" source="email" name="form">
                        <input type="hidden" id="siteId" name="siteId" value="262846">
                        <input type="hidden" id="pageId" name="pageId" value="262847">
                        <div class="u-form-email u-form-group">
                          <label for="email-319a" class="u-label u-text-body-alt-color u-label-1">Email</label>
                          <input type="email" placeholder="Enter a valid email address" id="email-319a" name="email" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required="">
                        </div>
                        <div class="u-form-address u-form-group u-form-group-2">
                          <label for="address-452f" class="u-label u-text-body-alt-color u-label-2">Address</label>
                          <input type="text" placeholder="Enter your address" id="address-452f" name="address" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required="">
                        </div>
                        <div class="u-form-group u-form-message">
                          <label for="message-319a" class="u-label u-text-body-alt-color u-label-3">Message</label>
                          <textarea placeholder="Enter your message" rows="4" cols="50" id="message-319a" name="message" class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle" required=""></textarea>
                        </div>
                        <div class="u-align-left u-form-group u-form-submit">
                          <a href="#" class="u-btn u-btn-submit u-button-style u-white u-btn-1">Submit</a>
                          <input type="submit" value="submit" class="u-form-control-hidden">
                        </div>
                        <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse">
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        `

    },
    afterRender() {
        $("#form-add-contact").addEventListener("submit", (e) => {
            e.preventDefault();


            const product = {
                id: Math.random().toString(36).substr(2, 9),
                name: $("#hoten").value,
                sdt: $("#sdt").value,

                noidung: $("#nd").value,
                email: $("#mail").value
            };
            ContactAPI.add(product);
            alert("Cảm ơn bạn đã phản hồi!!");


        });
    },
}
export default Contact;