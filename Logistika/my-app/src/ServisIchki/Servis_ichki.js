import React from "react";
import './Servis_ichki.scss';
import img01 from './Img/img01.jpg';
import img_servis from '../ServisIchki/Img/img_servis.jpg'
import servis_ichki from '../ServisIchki/Img/servis_ichki.jpg';
import xarita from '../ServisIchki/Img/xarita.png';
import yukmashina from '../ServisIchki/Img/yukmashina.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa';
const Servis_ichki = () => {
  return (
    <div className="servis_external_div">



      <div className="servis_internal servis_title servis_stile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="servis_internal_text">
                <h1>Yuk tashishga ixtisoslashtirilgan transport xizmatlari</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* servis_internal_page_content start */}

      <div className="servis_internal_page_content  mb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 servis_ul_left">
              <div className="servis_internal_custom_heaing">
                <h2>SIZNING FOYDALARINGIZ</h2>
              </div>
              <p>
                Ammo ba'zi hollarda, biznes majburiyatlari yoki majburiyatlari tufayli, zavqlarni rad etish va bezovtaliklarni qabul qilish kerak bo'ladi. Donishmand har doim bu masalalarda tanlovning bu tamoyiliga amal qiladi: u boshqa katta zavqlarni olish uchun zavqlarni rad etadi, aks holda yomonroq og'riqlardan qochish uchun og'riqlarga dosh beradi.
              </p>
              {/* fa-ul-start */}
              <ul className="servis_internal_custom_heaing_fa_ul">
                <li>
                  <FaLongArrowAltRight />
                  Transport yo'nalishlarini, transport vositalarini optimallashtirish va xarajatlarni kamaytirish orqali yuqori sifatli xizmat
                </li>
                <li>
                  <FaLongArrowAltRight />
                  Sizning biznesingizga raqobatbardosh ustunlik beradigan kuchli optimallashtirilgan ta'minot zanjiri infratuzilmasi
                </li>
                <li>
                  <FaLongArrowAltRight />
                  Samarali sifat o'lchash va monitoring sizga xarajatlarni kamaytirish va biznesingizni optimallashtirish imkonini beradi.
                </li>
                <li>
                  <FaLongArrowAltRight />
                  Sinxronlashtirilgan talab va taklif, bu sizning mijozlaringiz ehtiyojlarini aniqroq va aniqroq aniqlash imkonini beradi.
                </li>
              </ul>
              {/* fa-ul-end */}
            </div>
            <div className="col-md-6">
              <div className="servis_internal_page_content_img container">

                <img src={servis_ichki} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* servis_internal_page_content end */}

      {/* servis_internal_page_content parallox start */}

      <div className="servis_internal_page_content_parallox parallox04 daark mb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="servis_internal_custom_heaing_parallox custom_after">
                <h2>Xavfsiz saqlash</h2>
              </div>
              <div className="servis_internal_custom_heaing_parallox_statement">
                <p>
                  Yuklarni xavfsiz va tez o'z manziliga yetkazib berishga va'da beramiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* servis_internal_page_content parallox end */}

      {/* servis_internal_page_content card start */}

      <div className="servis_internal_page_content_card mb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="servis_internal_custom_heaing_parallox_card custom_after">
                <h2>o'zbekistonda ichki yetkazib berish xizmati</h2>
                <p>MAXSUS LOGISTIKA XIZMATLARI</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 servis_card_pedding">
              <div className="card text-left servis_internal_card_1 servis_card">
                <div className="owerflow servis_card_img_overflow card_servis_img2">
                  <img src={img_servis} alt="card 1" className="card-img-top servis_card_img" />
                </div>
                <div className="card-body text-dark servis_internal_card_card_body">
                  <h4 className="card-title  custom_after1">
                    MILLIY LOGISTIKA
                  </h4>
                  <p className="card-text text-secondary">Barcha mijozlarimizga yuqori sifatli transport xizmatlarini ko'rsatish.
                  Yaxshi xizmat ko'rsatish va kompaniyaning o'sishini ta'minlash uchun xodimlarimizga sarmoya kiriting.
                  </p>
                  
                  <a href="/contact" className="btn btn-primary">Buyurtma berish</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 servis_card_pedding ">
              <div className="card text-left servis_internal_card_1 servis_card">
                <div className="owerflow servis_card_img_overflow">
                  <img src={img01} alt="card 1" className="card-img-top servis_card_img" />
                </div>
                <div className="card-body text-dark servis_internal_card_card_body">
                  <h4 className="card-title  custom_after1">
                    GROUND yuk tashish
                  </h4>
                  <p className="card-text text-secondary">Biz avtomobilda farmatsevtika logistikasi,<br /> chakana savdo va avtomobil logistikasi kabi quruqlikdagi maxsus logistika echimlarida katta tajribaga egamiz.
                  </p>
                  <a href="/contact" className="btn btn-primary">Buyurtma berish</a>
                </div>
              </div>
            </div>



            <div className="col-md-4 col-sm-4 servis_card_pedding">
              <div className="card text-left servis_internal_card_1 servis_card">
                <div className="owerflow servis_card_img_overflow card_servis_img2">
                  <img src={yukmashina} alt="card 1" className="card-img-top servis_card_img" />
                </div>
                <div className="card-body text-dark servis_internal_card_card_body">
                  <h4 className="card-title  custom_after1">
                  Ichki yuk tashish
                  </h4>
                  <p className="card-text text-secondary">Biz yirik yuk avtomobillarida farmaseftika, logistika, chakana savdo va avtomobile logistikasi kabi quruqlikdagi maxsus lagistika yechimlarida katta tajribaga egamiz
                  </p>
                  <a href="/contact" className="btn btn-primary">Buyurtma berish</a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>



    </div>
  );
}
export default Servis_ichki;