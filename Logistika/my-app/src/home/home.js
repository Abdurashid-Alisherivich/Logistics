import './home.scss'
import React, { Component } from "react";
import imag1 from './home-img/home_avtobus.jpg'
import imag8 from './home-img/home_fura_1_basic.jpg'
import imag2 from './home-img/home_fura_bg_2.jpg'
import imag9 from './home-img/home_fura_7_basic.jpg'
import imag3 from './home-img/home_fura_bg_3.jpg'
import imag5 from './home-img/home_lasts_card_img.jpg'
import imag6 from './home-img/home_lasts_card2.jpg'
import imag7 from './home-img/home_latst_card3_img.jpg'
import card1 from './home-img/card_1_img.jpg'
import { FcRules } from 'react-icons/fc';
import { FcGlobe } from 'react-icons/fc';
import { FcShipped } from 'react-icons/fc';
import { FcMultipleDevices } from 'react-icons/fc';
import { FcPaid } from 'react-icons/fc';
import { FcRadarPlot } from 'react-icons/fc';
import { FcPositiveDynamic } from 'react-icons/fc';
import { FcCurrencyExchange } from 'react-icons/fc';
import { FcInTransit } from 'react-icons/fc';
import {Link} from 'react-router-dom'


const Home = () =>{



    return (
        <>
          
                <div className="basic_container">
                
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className = "carousel-item active home_1_fura_bg" >
                      <img src={imag1} className="d-block w-100" alt="..."/>
                       <div class="carousel-caption">
                           <h1 className="home_1_fura_txt">
                                   Eng zamonaviy TRANSPORTLAR
                            </h1>
                      </div>
                    </div>
                    <div className="carousel-item home_2_fura_bg">
                      <img src={imag2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption">
                        <h4 className="home_2_fura_txt">Yuk tashish xizmatlarini</h4>
                        <h2>Biz bilan tez va oson bajaring</h2>
                      </div>
                    </div>
                    <div className="carousel-item home_3_fura_bg">
                      <img src={imag3} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption">
                        <h4 className="home_3_fura_txt">Eng Tezkor Yetkazib Berish Xizmatlari </h4>
                      </div>
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

                <div className="home_second_page">

                
                <div className="container home_cardddd">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 ">
                <div className="card home_umumiy_card_border">
                  <img src={card1} className="card-img-top" alt="..."/>
                  <div className="card-body">
               <Link className="home_a_href" to="/service"> <button button button type = "button"
               className = "btn btn-primary btn-sm home_secondPG_btn" > Ko'proq </button></Link>
                
                    <h4 className="card-title">Xalqaro yuk tashish</h4>
                    <p className="card-text home_vashshi_basic_txt">Biz yirik yuk avtomobillarida farmaseftika, logistika, chakana savdo va avtomobile logistikasi kabi quruqlikdagi maxsus lagistika yechimlarida katta tajribaga egamiz</p>
                  </div>
                </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                <div className="card home_caaaard home_umumiy_card_border">
                  <img src={imag8} className="card-img-top" alt="..."/>
                  <div className="card-body">
                   <Link className="home_a_href"  to="/service_ichki"><button button type = "button"
                    className = "btn btn-primary btn-sm home_secondPG_btn">Ko'proq  </button></Link>
                
                    <h4 className="card-title">Ichki yuk tashish</h4>
                    <p className="card-text home_vashshi_basic_txt">Biz yirik yuk avtomobillarida farmaseftika, logistika, chakana savdo va avtomobile logistikasi kabi quruqlikdagi maxsus lagistika yechimlarida katta tajribaga egamiz</p>
                  </div>
                </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                <div className="card home_caaaard home_umumiy_card_border">
                  <img src={imag9} className="card-img-top" alt="..."/>
                  <div className="card-body">
                   <Link className="home_a_href" to="/turizm"> <button button type = "button"
                    className = "btn btn-primary btn-sm home_secondPG_btn" > Ko'proq</button> </Link>
                
                    <h4 className="card-title">Ichki turizm Yo'nalishlari</h4>
                    <p className="card-text home_vashshi_basic_txt">Biz O'zbekiston ichida har bir viloyatlarda ichki tourizmni rivojlantirish uchun zamonvaiy avtomobillar qatnovini yo'lga. Maqsadamiz sizlarni Yolingizni yaqin qilish.</p>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>

                <div className="home_third_page">
                          <h1 className="home_thrdPG_txt">Biz Nimalarni Taklif Qilamiz?</h1>
                          <h4 className="home_thrdPG_smTxt">Tayyor logistik xizmatlar</h4>
                          <div className="container home_basic_grid">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <FcRules className = "home_first_icon" / > <h3 h3 h3 className = "home_first_icon_txt" > Shartnoma bo'yicha logistika</h3>
                                <p className="home_first_icon_smTxt home_vashshi_basic_txt">Maxsus logistika xizmati kerakmi? Bizda buning barchasining imkoni bor. Tez, Xafsiz va anniq yetkazib berish xalqaro taminlangan.</p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <FcGlobe className = "home_first_icon" / > <h3 className="home_first_icon_txt">Yetkazib berish qulayliklari</h3>
                                <p className="home_first_icon_smTxt home_vashshi_basic_txt"> Yuk tashish kompaniyasi barcha etkazib berish zanjirlaridan foydalangan holda eng yaxshi logistika xizmatlarini taklif qiladi.Tovarlaringizni jo'natish uchun eng sifatli va zamonaviy avtomobillarni taklif qilamiz .</p>
                              </div>
                            </div>
                          </div> <br />

                           <div className="container homesecon_icon_grid">
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <FcShipped className = "home_first_icon" / > <h3 h3 h3 h3 className = "home_first_icon_txt" > O 'zbekistonda ichki logistika</h3>
                                <p className="home_first_icon_smTxt home_vashshi_basic_txt">Biz sizlarga yurtimizda ichki logistikani ham taklif qilamiz! Har bit viloyatga tez va oson hamda eng tezkot avtomobillar yordamida yetkazib berish.</p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                <FcMultipleDevices className = "home_first_icon" / > <h3 className="home_first_icon_txt">Ichki tourizmni tashkil qilish</h3>
                                <p className = "home_first_icon_smTxt home_vashshi_basic_txt" >Biz bilan hammasi oson! Chunki biz bilan faqatgina yuklarni tashish emas balki yurtining eng chekka choylariga ham tashrif buyurishingiz mumkin. Albatta biz bilan!</p>
                              </div>
                            </div>
                          </div>
                </div>

                 <div className="home_four_page">
                  <div class="container-fluid">
                      <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6 home_fr_pg_grid1">
                            <h1 className="home_frPG_1txt">Sanoat sektorlarini qo'llash</h1>
                            <p className="home_frPG_2txt">Biz oziq-ovqat va ichimliklar, <br /> kimyo, chakana savdo, bardoshli <br />
                             mahsulotlar va boshqalardan tortib sanoatning <br />
                              turli sohalarini qamrab olamiz. To'liq ro'yxatni tekshiring.</p>
                              <FcPaid  className="home_frPG_icon1"/> <h4 className="home_frPG_smtxt1">Istemol paketli mahsulotlar</h4>
                              <FcRadarPlot className="home_frPG_icon1" /> <h4 className="home_frPG_smtxt1">Kimyoviy mahsulotlar</h4>
                              <FcPositiveDynamic className="home_frPG_icon1" /> <h4 className="home_frPG_smtxt1">Oziq ovqat va ichimliklar</h4>
                              <FcCurrencyExchange className="home_frPG_icon1" /> <h4 className="home_frPG_smtxt1">Chakana savdo tovarlar</h4>
                              <FcInTransit className="home_frPG_icon1" /> <h4 className="home_frPG_smtxt1">Qurilish mollari</h4>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6 home_fr_pg_grid2">
                            
                          </div>
                        </div>
                      </div>
                </div>

                  <div className="home_five_page">
                      <div className="container home_basic_container">
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <h3 className="home_offfffice">Office yangiliklari</h3>
                            <br />
                             <div class="card mb-3 home_lasts_cardStyle">
                                <div class="row g-0">
                                  <div class="col-md-4">
                                    <img src={imag5} class="img-fluid rounded-start" alt="..."/>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <p class="card-text home_vashshi_basic_txt">Biz o'z hamkorlarizmizga xalqaro va ichki logistika uchun 100% kafolatlangan hujjat taqdim etamiz</p>
                                    </div>
                                  </div>
                                </div>
                           </div>

                            <div class="card mb-3 home_lasts_cardStyle1">
                                <div class="row g-0">
                                  <div class="col-md-4">
                                    <img src={imag6} class="img-fluid rounded-start" alt="..."/>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <p class="card-text home_vashshi_basic_txt">Bizda eng professional haydocvhi va eng zamonaviy avtomobillar jamlangan</p>
                                    </div>
                                  </div>
                                </div>
                           </div>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <h3>Mijozlar nima deydi</h3>
                            <br />
                            <p className="home_vashshi_basic_txt">Bu juda ajoyib web sayt. Shuni aytishim kerakki bu juda ham ishonchli Logistika xizmati. Men bu firmaga kotta rahmat aytaman.</p>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4" >
                            <h3>Bizning joylashuvimiz</h3>
                            <br />
                              <img src={imag7} class="img-fluid rounded-start" alt="..."/>

                            <p className="home_vashshi_basic_txt">Biz Farg'ona viloyati Farg;ona shahri Soliq boshqarmasi to'g'risidagi Verona mebel binosining 3 - qavatida joylashganmiz</p>
                          </div>
                        </div>
                      </div>
                  </div>

                  


                  


                </div>

               
                
        </>
    )
}

export default Home