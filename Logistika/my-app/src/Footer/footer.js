import './footer.scss'

const Footer = () => {
    return(
<>
<div id="footer-wrapper" className="footer-dark">
       <footer id="footer">
           <div className="container container-footer">
               <div className="row row-footer">

                    <ul class="col-md-4 col-footer col-sm-6 footer-widget-container">
                                <li class="widget widget_pages">
                                    <div class="title-footer">
                                        <h3 className="footer-h3">quick links</h3>
                                    </div>
                                    <ul className="footer-ul">
                                        <li><a href="/about" className="footer-a">Biz haqimizda</a></li>
                                        <li><a href="/contact" className="footer-a">Aloqa uchun</a></li>
                                        <li><a href="/about" className="footer-a">Xizmatlar</a></li>
                                        <li><a href="/contact" className="footer-a">Treking</a></li>
                                    </ul>
                                </li>
                    </ul>

                    <ul class="col-md-4 col-footer col-sm-6 footer-widget-container">
                            <li class="widget widget_pages">
                                <div class="title-footer">
                                    <h3 className="footer-h3">Industry solutions</h3>
                                </div>
                                <ul className="footer-ul">
                                    <li><a href="service" className="footer-a">Xalqaro yuklarni tashish xizmati</a></li>
                                    <li><a href="#" className="footer-a">Yukarni O'zbekiston bo'ylab tashish</a></li>
                                    <li><a href="/turizm" className="footer-a">Turizm xizmati</a></li>
                                    <li><a href="/contact" className="footer-a">Yuklarni tashish xizmati</a></li>
                                </ul>
                            </li>
                    </ul>

                    <ul class="col-md-4 col-footer col-sm-6 footer-widget-container">
                            <li class="widget widget-text-footer">
                                <div class="title-footer">
                                    <h3 className="footer-h3">contact us</h3>
                                </div>

                                <address>
                                    42 Street Sayilgoh,
                                    <br />
                                    Sayilgoh, Fergana
                                </address>
                                <br />

                                <span class="text-big-footer">
                                    +998 99 002 88 35
                                </span>
                                <br />

                                <a href="https://technobeck.uz/" className="mail-footer">Technobeck.uz</a>

                                <ul class="footer-social-icons">
                                    <li className="footer-icon"><a href="#" class="fa fa-facebook icon-footer"><i class="bx bxl-telegram"></i></a></li>
                                    <li className="footer-icon"><a href="https://instagram.com/technobeck.uz" class="fa fa-instagram icon-footer"><i class="bx bxl-facebook"></i></a></li>
                                    <li className="footer-icon"><a href="https://t.me/technobeck" class="fa fa-telegram icon-footer"><i class="bx bxl-instagram"></i></a></li>
                                </ul>
                            </li>
                    </ul>

               </div>
           </div>
           <div className="copyrighting-container">
              <div className="container">
                <div className="row row-copyrighting">
                  <div className="col-md-6">
                  {/* <p className="copyrighting-p">TRUCKING 2021. All RIGHTS RESERVED.</p> */}
                  </div>
                  <div className="col-md-6">
                  <p class="align-right">DESIGNED AND DEVELOPED BY <a href="https://technobeck.uz/">TECHNOBECK TEAM.</a></p>
                  </div>
                </div>
              </div>
            </div>
       </footer>
</div>
</>
    )
}
export default Footer;