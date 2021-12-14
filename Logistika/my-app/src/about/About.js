import React, {useEffect} from "react";
import './About.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slider';
const About = ()=>{
    useEffect(()=>{
        AOS.init({})
    })
    return(
        <>
            <div className="container-fluid about_page">
                {/* about_header start */}
                <div className="about__header" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in"> 
                    <div className="about__header__title">
                        <h1>
                        Yuk tashish xizmatlarini
                        </h1>
                        <p>Biz bilan tez va oson bajaring</p>
                    </div>
                </div>
                {/* about__header end */}
                {/* start about__main */}
                <div className="about__main">
                    {/* start main_info */}
                    <div className="about__main__info" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in"  data-aos-delay="500">
                        <div className="main_info_title">
                            <h1>
                                Biz haqimizda
                            </h1>
                            {/* <p>
                                MORE THAN JUST A TRUCKING TEMPLATE
                            </p> */}
                        </div>
                        <p className="about_main_info">
                        Biz yuk tashish, logistika kompaniyasi bo'lib, dunyoning 150 dan ortiq mamlakatlarida mijozlarimizga yuk tashish tajribasini taqdim etamiz.
                        </p>
                    </div>
                    {/* end main_info */}
                    {/* start main_page_content  */}
                    <div className="main_page_content">
                        <div className="main_content_1 container-fluid">
                            <div className="row page">
                                <div className="col-md-4 text_content1" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
                                    <h3>
                                        Yuk tashish logistikasi
                                    </h3>
                                    <p>
                                    ____________ logistika kompaniyasi O'zbekistonda tovarlarni etkazib berish va saqlash bo'yicha to'liq xizmatlarni taqdim etadi. Kompaniyaning asosiy faoliyati guruhli yuklarni tashish, to'liq avtotransportda tashish (transport vositalarini haydovchiga ijaraga berish), savdo tarmoqlariga tovarlarni etkazib berish, shuningdek shaxarlaro turizm.
                                    Marshrutni rejalashtirishdan to yuklarni to'g'ridan-to'g'ri etkazib berishgacha bo'lgan har bir bosqichda bizning mutaxassislarning to'plangan boy tajribasi, professionalligi va mas'uliyati mijozlarimiz uchun sifat va ishonchlilik kafolatidir.
                                    </p>
                                    <ul>
                                        <li>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
                                        Mijozlarga yuqori sifatli xizmat ko’rsatish;
                                        </li>
                                        <li>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
                                            O’zbekiston bo’ylab keng tarmoqli ish olib borish;
                                        </li>
                                        <li>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
                                            Innovatsion texnologiyalardan foydalanish;
                                        </li>
                                        <li>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
                                            Respublikamizda kuryerlik xizmatini rivojlantirish;
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-md-6 image_content1">
                                </div>
                            </div>
                        </div>
                        <div className="main_content_2 container-fluid">
                            <div className="row ">
                                <div className="col-md-6 image_content2" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
                                </div>
                                <div className="col-md-4 text_content2" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in">
                                    <h3>
                                        Xavfsiz va ishonchli xizmat
                                    </h3>
                                    <p>
                                    ____________ logistika kompaniyasi O'zbekistonda tovarlarni etkazib berish va saqlash bo'yicha to'liq xizmatlarni taqdim etadi. Kompaniyaning asosiy faoliyati guruhli yuklarni tashish, to'liq avtotransportda tashish (transport vositalarini haydovchiga ijaraga berish), savdo tarmoqlariga tovarlarni etkazib berish, shuningdek shaxarlaro turizm.
                                    <br />
                                    <br />
                                    Marshrutni rejalashtirishdan to yuklarni to'g'ridan-to'g'ri etkazib berishgacha bo'lgan har bir bosqichda bizning mutaxassislarning to'plangan boy tajribasi, professionalligi va mas'uliyati mijozlarimiz uchun sifat va ishonchlilik kafolatidir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="main_content_3 container-fluid">
                            <div className="row ">
                                <div className="col-md-4 text_content3" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
                                    <h3>
                                        NEGA AYNAN BIZ?
                                    </h3>
                                    <ul className="fa-ul large-icons">
                                        <li>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                                            </span>
                                            <div className="li_content">
                                                
                                                <h3>
                                                    Tezkor yetkazish xizmati
                                                </h3>
                                                <p>                
                                                    Bizning kompaniya mijoz yuklarini tezkorlik bilan qisqa vaqtda yetkazib berishni kafolatlaydi. 
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                                            </span>
                                            <div className="li_content">
                                                <h3>
                                                    24 soat qo'llab-quvvatlash
                                                </h3>
                                                <p>                
                                                    Mijozlarni 24/7 tarzda qo'llab quvvatlaydi. 
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                                            </span>
                                            <div className="li_content">
                                                <h3>
                                                    Xavfsiz va ishonchli
                                                </h3>
                                                <p>                
                                                    Qabul qilingan buyurtmalarni ishonchli va xavfsiz tarzda yetkazib berish kafolati.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 image_content3" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stats_count" >
                        <div className="container-fluid">
                            <div className="row" >
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="stat_item">
                                            <div className="stat_icon">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M137.273 41c1.41 59.526 16.381 119.035 35.125 167.77 19.69 51.191 44.086 90.988 57.965 104.867l2.637 2.636V343h46v-26.727l2.637-2.636c13.879-13.88 38.275-53.676 57.965-104.867 18.744-48.735 33.715-108.244 35.125-167.77zm-50.605 68.295c-17.97 6.05-32.296 18.214-37.625 30.367-3.015 6.875-3.48 13.44-.988 20.129.285.766.62 1.54.996 2.318a119.032 119.032 0 0 1 8.504-4.812l6.277-3.215 4.621 5.326c5.137 5.92 9.61 12.37 13.422 19.125 2.573-3.06 5.207-7.864 7.05-14.037 4.491-15.034 4.322-36.95-2.257-55.201zm338.664 0c-6.58 18.25-6.748 40.167-2.258 55.201 1.844 6.173 4.478 10.977 7.051 14.037 3.813-6.756 8.285-13.205 13.422-19.125l4.621-5.326 6.277 3.215a119.033 119.033 0 0 1 8.504 4.812c.375-.779.71-1.552.996-2.318 2.492-6.689 2.027-13.254-.988-20.129-5.329-12.153-19.655-24.317-37.625-30.367zm-365.975 67.74c-20.251 12.486-34.121 31.475-36.746 47.973-1.447 9.1.09 17.224 5.323 24.545 1.66 2.324 3.743 4.594 6.304 6.76a116.606 116.606 0 0 1 11.44-14.977l4.72-5.24 6.217 3.33c7.91 4.236 15.262 9.424 21.94 15.252.973-3.633 1.619-7.892 1.773-12.616.636-19.438-6.762-45.536-20.97-65.027zm393.286 0c-14.21 19.49-21.607 45.59-20.971 65.027.154 4.724.8 8.983 1.773 12.616 6.678-5.828 14.03-11.016 21.94-15.252l6.217-3.33 4.72 5.24a116.606 116.606 0 0 1 11.44 14.976c2.56-2.165 4.643-4.435 6.304-6.76 5.233-7.32 6.77-15.444 5.323-24.544-2.625-16.498-16.495-35.487-36.746-47.973zM54.4 259.133c-14.394 18.806-20.496 41.413-17.004 57.748 1.928 9.014 6.298 16.078 13.844 21.078 4.944 3.276 11.48 5.7 19.94 6.645a120.631 120.631 0 0 1 7.101-17.852l3.125-6.338 6.9 1.535c4.095.911 8.133 2.046 12.094 3.377-.373-3.838-1.309-8.185-2.925-12.82-6.416-18.396-22.749-40.184-43.075-53.373zm403.2 0c-20.326 13.189-36.66 34.977-43.075 53.373-1.616 4.635-2.552 8.982-2.925 12.82a119.337 119.337 0 0 1 12.093-3.377l6.9-1.535 3.126 6.338a120.63 120.63 0 0 1 7.101 17.852c8.46-.944 14.996-3.37 19.94-6.645 7.546-5 11.916-12.065 13.844-21.078 3.492-16.335-2.61-38.942-17.004-57.748zM91.5 341.527c-9.285 23.14-9.027 47.85-.709 63.54 4.57 8.619 11.106 14.607 20.268 17.562 4.586 1.479 9.957 2.19 16.185 1.803-2.135-11.155-2.771-22.97-1.756-34.938l.602-7.074 7.02-1.065a129.43 129.43 0 0 1 13.458-1.312c.554-.025 1.107-.04 1.66-.059-12.419-15.776-33.883-31.43-56.728-38.457zm329 0c-22.845 7.027-44.31 22.68-56.729 38.457.554.019 1.107.034 1.66.059 4.5.206 8.995.637 13.46 1.312l7.02 1.065.6 7.074c1.016 11.967.38 23.783-1.755 34.938 6.228.386 11.6-.324 16.185-1.803 9.162-2.955 15.699-8.943 20.268-17.563 8.318-15.69 8.576-40.4-.709-63.539zM199.729 361c-1.943 7.383-6.045 14.043-11.366 19.363a46.544 46.544 0 0 1-3.484 3.125c14.804 3.295 28.659 8.692 40.404 15.46 2.384-5.36 5.376-10.345 9.408-14.534C239.96 378.942 247.51 375 256 375c8.491 0 16.041 3.942 21.309 9.414 4.032 4.19 7.024 9.175 9.408 14.533 11.815-6.808 25.766-12.23 40.67-15.52a48.107 48.107 0 0 1-3.739-3.413c-5.227-5.333-9.27-11.852-11.261-19.014zM256 393c-3.434 0-5.635 1.084-8.34 3.895-2.704 2.81-5.395 7.52-7.527 13.298-4.265 11.556-6.343 27-7.156 38.446-1.07 15.043 3 33.368 12.285 40.06 4.733 3.412 16.743 3.412 21.476 0 9.285-6.692 13.355-25.017 12.285-40.06-.813-11.446-2.891-26.89-7.156-38.446-2.132-5.777-4.823-10.488-7.527-13.298-2.705-2.81-4.906-3.895-8.34-3.895zm-103.521 4.979c-1.714-.008-3.424.022-5.127.09-1.405.055-2.77.281-4.164.39-.418 27.817 9.816 53.543 24.994 66.644 8.264 7.134 17.586 10.772 28.35 10.157 5.908-.338 12.394-2.03 19.374-5.52-1.27-7.665-1.377-15.42-.883-22.379.632-8.89 1.852-19.962 4.479-30.877-17.16-10.686-42.426-18.395-67.023-18.506zm207.042 0c-24.597.11-49.863 7.82-67.023 18.505 2.627 10.915 3.847 21.987 4.479 30.877.494 6.958.387 14.714-.883 22.38 6.98 3.49 13.466 5.181 19.375 5.519 10.763.615 20.085-3.023 28.35-10.156 15.177-13.102 25.411-38.828 24.993-66.645-1.393-.109-2.76-.335-4.164-.39a116.32 116.32 0 0 0-5.127-.09z"></path></svg>
                                            </div>
                                            <div className="stat_number">
                                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                                    {({ isVisible }) => (
                                                    <div style={{ height: 30 }}>
                                                        {isVisible ? <CountUp start={10} end={1000} duration={2} /> : null}
                                                    </div>
                                                    
                                                    )}
                                                </VisibilitySensor>

                                            </div>
                                            <div className="stat_text">
                                                <h5>
                                                    Tugatilgan <br/> Loyixalar
                                                </h5>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="stat_item">
                                            <div className="stat_icon">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>
                                            </div>
                                            <div className="stat_number">
                                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                                    {({ isVisible }) => (
                                                    <div style={{ height: 100 }}>
                                                        {isVisible ? <CountUp start={10} end={650} duration={2} /> : null}
                                                    </div>
                                                    
                                                    )}
                                                </VisibilitySensor>

                                            </div>
                                            <div className="stat_text">
                                                <h5>
                                                    Mamnun <br/> Mijozlar
                                                </h5>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="stat_item">
                                            <div className="stat_icon">
                                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                            </div>
                                            <div className="stat_number">
                                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                                    {({ isVisible }) => (
                                                    <div style={{ height: 100 }}>
                                                        {isVisible ? <CountUp start={10} end={450} duration={2} /> : null}
                                                    </div>
                                                    
                                                    )}
                                                </VisibilitySensor>

                                            </div>
                                            <div className="stat_text">
                                                <h5>
                                                    Ishchilar <br/> soni
                                                </h5>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="stat_item">
                                            <div className="stat_icon">    
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path></svg>
                                            </div>
                                            <div className="stat_number">
                                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                                    {({ isVisible }) => (
                                                    <div style={{ height: 100 }}>
                                                        {isVisible ? <CountUp start={0} end={15} duration={2} /> : null}
                                                    </div>
                                                    
                                                    )}
                                                </VisibilitySensor>

                                            </div>
                                            <div className="stat_text">
                                                <h5>
                                                    Yil <br/> Bozorda
                                                </h5>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end main_page_content */}
                    {/* start main__advantages */}
                    <div className="main__advantages">
                            <div className="advantages_title container-fluid" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
                                <h3>
                                    Bizning afzalliklarimiz
                                </h3>
                                <p>
                                   Ustun jihatlarimiz
                                </p>
                            </div>
                            <div className="advantages_content container-fluid">
                                    <div className="row">
                                            <div className="col-md-3 col-sm-6" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in">
                                                <div className="content_cards">
                                                    <div className="content_icon">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"></path></svg>
                                                            {/* fcfcfc  ddd*/}
                                                    </div>
                                                    <h4>
                                                        Doimiy rivojlanish
                                                    </h4>
                                                    <p>
                                                        Mijoz qadriyatlarini xisobga olgan xolda, doimiy amaliy rivojlanish 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in">
                                                <div className="content_cards">
                                                    <div className="content_icon">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path></svg>
                                                            {/* fcfcfc  ddd*/}
                                                    </div>
                                                    <h4>
                                                        So'ngi texnalogiyalar
                                                    </h4>
                                                    <p>
                                                        Zamonga xamoxang tarzda yetkazib berishda eng so'ngi texnologiyalardan foydalanish
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in">
                                                <div className="content_cards">
                                                    <div className="content_icon">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"></path><path d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"></path></svg>
                                                    </div>
                                                    <h4>
                                                        Xavfsizlik va Sifat
                                                    </h4>
                                                    <p>
                                                        Yetkazib berishda buyurtmalarni xavfsiz tarzda yetkazib berilishi kafolati 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in">
                                                <div className="content_cards">
                                                    <div className="content_icon">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>
                                                            
                                                    </div>
                                                    <h4>
                                                        Qo'llab quvvatlash
                                                    </h4>
                                                    <p>
                                                        Mijozlarni doimiy qo'llab-quvvatlash va ular bilan uzliksiz aloqa ta'minlanishi
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    {/* end main__advantages */}
                    
                </div>
                {/* end about__main */}
                <div className="about_footer ">
                    <div className="container"data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="ease-in">
                        <Slide/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;








