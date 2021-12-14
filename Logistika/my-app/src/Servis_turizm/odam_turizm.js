import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './odam.turizm.scss'
import imag from './images/img.jpg'
import caruselone from './images/corusel-one.jpg'
import caruseltwo from './images/carusel.two.jpg'
import caruselthere from './images/carusel-there.jpg'
import busone from './images/buses/bus-one.jpg'
import bustwo from './images/buses/bus-two.jpg'
import busthere from './images/buses/bus-there.jpg'
import busfour from './images/buses/bus-four.jpg'
import busfive from './images/buses/bus-five.jpg'
import bussix from './images/buses/bus-six.jpg'
import otherimg from './images/country/uzbekistan-tour.jpg'
import Samarkand from './images/country/samarkand-one.jpg'
import buxoroone from './images/country/buxoro-one.jpg'
import toshkent from './images/country/toshkent.jpg'

AOS.init();
function Turizm  () {
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={caruselone} className="img-one-two d-block w-100" alt="..."/>
   
    </div>
    <div className="carousel-item">
      <img src={caruseltwo} className="img-one-two d-block w-100" alt="..."/>
    
    </div>
    <div className="carousel-item">
      <img src={caruselthere} className="img-one-two d-block w-100" alt="..."/>
  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />


   
      
      <h1 className="second-page">Sayohat transportlari</h1>
      <p className="second-page-describe">TECHNOBECK L<span className='strong'>OGISTI</span>C SERVIS</p>
      <div className="home_second_pagee">

                
<div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-4 ">
<div className="card home_umumiy_card_border card-m">
  <img src={busone} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title h4-turizm">Zamonaviy Avtobus</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan</p>
    <a className="home_a_href" href="/turizm"> <button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn" > Buyurtma berish</button> </a>

  </div>
</div>
    </div>
    <br />

    <div className="col-sm-12 col-md-4">
<div className="card home_caaaard home_umumiy_card_border card-m">
  <img src={bustwo} className="card-img-top" alt="..."/>
  <div className="card-body">
  
    <h4 className="card-title h4-turizm">Yo'l qatnov</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan </p>
    <a className="home_a_href"  href=""><button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn">Buyurtma berish </button></a>

  </div>
</div>
    </div>
    <br />

    <div className="col-sm-12 col-md-4">
<div className="card home_caaaard home_umumiy_card_border card-m">
  <img src={busthere} className="card-img-top" alt="..."/>
  <div className="card-body">
 
    <h4 className="card-title h4-turizm">Shaxsiy Avtobuslar</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan</p>
    <a className="home_a_href" href="/turizm"> <button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn" > Buyurtma berish</button> </a>

  </div>
</div>
    </div>
    <br />

    <div className="col-sm-12 col-md-4">
<div className="card home_umumiy_card_border card-m">
  <img src={busfour} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title h4-turizm">Elektr Avtobuslar</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan</p>
    <a className="home_a_href" href="/turizm"> <button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn" > Buyurtma berish</button> </a>

  </div>
</div>
    </div>
    <br />

    <div className="col-sm-12 col-md-4 ">
<div className="card home_umumiy_card_border card-m">
  <img src={bussix} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title h4-turizm">Mikro Avtobus</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan</p>
    <a className="home_a_href" href="/turizm"> <button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn" > Buyurtma berish</button> </a>

  </div>
</div>
    </div>
    <br />

    <div className="col-sm-12 col-md-4 ">
<div className="card home_umumiy_card_border card-m">
  <img src={busfive} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title h4-turizm">Zhong Tong</h4>
    <br />
    <p className="card-text home_vashshi_basic_txt">Yangi Texnologiyalar Zamonaviy Avtobus Ko'rgazmasi Electro Bus Modern. Bu Avtobuslar Shaxsiy bo'lib Turli Chet Davlatlaridan Kelgan Mehmonlar Uchun. Bu Avtobuslar Elektda Yuradi Sababi Ekologiyaga Va Ko'proq Yurishga Mo'ljalangan</p>
    <a className="home_a_href" href="/turizm"> <button button type = "button"
    className = "btn btn-primary btn-sm home_secondPG_btn" > Buyurtma berish</button> </a>

  </div>
</div>
    </div>
  </div>
  
</div>
</div>
      <div className="bg-fon">
    <div className="item-infor container">
    <div className="infor-first-page">  
     <img className='infor-img-two' src={otherimg} alt="" />
    <h1 className="infor-title">Sayohat Joylari</h1>
    <br />
    <p className="infor-text">Har bir inson uzoq ish faoliyati davomida sayohat qilgisi keladi. Ayniqsa bu sayohat o‘z yaqinlari, oilasi, hamkasblari, do‘stlari bilan bo‘lsa unutilmas bo‘ladi. Rost, shunday kunlar butun umr yodda qoladi. <br />   Avval ham bir necha marotaba Farg'ona shahrida tashkil etilgan “Technobeck Servis” M.Ch.J. sayyohlik agentligi faoliyati bilan tanishib, agentlikning yurtimiz bo‘ylab sayohatlar tashkil qilayotganligi haqida yoritgan edik. Biz yana “Technobeck Servis” M.Ch.J. sayyohlik agentligi faoliyati bilan qiziqdik va agentlik rahbari Abbos Hazratqulov bilan bog‘landik. <br />
    “O‘tgan vaqt davomida sayyohlik agentligimiz faoliyatida yuqori o‘sishlar kuzatildi. O‘zbekiston bo‘ylab bizning xizmatlarimizdan foydalanuvchilar soni ko‘payib bormoqda. Yurtimizning Samarqand, Buxoro, Xiva, Toshkent, Shaxrisabz, Farg‘ona vodiysi va boshqa tarixiy shaharlariga uyushtiriladigan qiziqarli sayohatlar, diqqatga sazavor joylarga ekskursiyalar, muqaddas joylarimizga ziyoratlar chinakam maroqli bo‘layapdi. Arzon narx va sifatli xizmat bunga asos bo‘lmoqda.
        </p>
     
    </div>
    <div className="infor-second-page">
      <img className='infor-img' src={otherimg} alt="" />
    </div>
    </div>
    </div>
    <br />



    <div className="container">
    <div className="page-there">

<div className='there-one' >  
<div  data-aos-duration="3000" data-aos="zoom-in" className="zoom-cards card bg-dark text-white">
<img src={buxoroone} className="card-page-img card-img" alt="..." />
<div className="card-img-overlay">
<h5 className="card-title-one">Buxoro</h5>
<p className="card-text-there card-text">Turli xil manzilgohlar zamonaviy avtobuslat qulay sharoitlar va<br /> Asosiysi arzon narxdagi biletlar</p>
</div>
</div>
<div data-aos-duration="3000" data-aos="zoom-in"  className="zoom-cards card bg-dark text-white">
<img src={Samarkand} className="card-page-img card-img" alt="..." />
<div class="card-img-overlay">
<h5 class="card-title-one">Samarqand</h5>
<p class="card-text-there card-text">Turli xil manzilgohlar zamonaviy avtobuslat qulay sharoitlar va<br /> Asosiysi arzon narxdagi biletlar</p>
</div>
</div>
</div>
<div className="there-two">
<div  data-aos-duration="3000" data-aos="zoom-in" class="zoom-cards card bg-dark text-white">
<img src={imag} class=" card-page-img card-img" alt="..." />
<div class="card-img-overlay">
<h5 class="card-title-one">Namangan</h5>
</div>
</div>
<div data-aos-duration="3000" data-aos="zoom-in"  class="zoom-cards card bg-dark text-white">
<img src={toshkent} class=" card-page-img card-img" alt="..." />
<div class="card-img-overlay">
<h5 class="card-title-one">Toshkent</h5>
</div>
</div>
</div>
</div>
<br />
    </div>

 
 
    </> 
  )
}

export default Turizm