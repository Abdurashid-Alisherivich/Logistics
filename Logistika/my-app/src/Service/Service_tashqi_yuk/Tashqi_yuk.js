import './Tashqi_yuk.css'
import service_img1 from '../img/service1.jpg';
import house from '../img/warehouse.jpg'
import fura from '../img/fura1.jpg'
import end_png1 from '../img/end_npg1.jpg'
import end_png2 from '../img/end_npg2.jpg'
import end_png3 from '../img/end_npg3.jpg'
import tash_banner from '../img/tash_banner.jpg'

function Tashqi_yuk(){
    return(
        <>
            <div className="tash_service">
                <div className="tash_banner">
                    <img src={tash_banner} alt="" />
                </div>
                <div className="malumot1">
                    <div className="shart row">
                        <div className="shart_left col-md-8">
                            <h2>Milliy logistika</h2>
                            <ul>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Barcha mijozlarimizga yuqori sifatli transport xizmatlarini ko'rsatish</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Yaxshi xizmat ko'rsatish va kompaniyaning o'sishini ta'minlash uchun xodimlarimizga sarmoya kiriting</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Eng so'nggi sanoat standartlariga muvofiq atrof -muhit haqida qayg'urish</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Xavfsiz ish tartibini ta'minlashda xavfsizlik birinchi o'rinda turadi</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Tez, aniq va iqtisodiy xizmat ko'rsatish uchun texnologiyaga sarmoya kiritish</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Eng yuqori sanoat standartlariga muvofiq yashash</li>
                            </ul>
                        </div>
                        <div className="shart_right col-md-4">
                            <img src={service_img1} alt="fura" />
                        </div>
                    </div>
                </div>
                <div className="malumot2 row ">
                <h2>BOSQICHMA-BOSQICH AMALGA OSHIRISH</h2>
                    <div className="mal2_fura col-md-4">
                        <img src={fura} alt="" />
                    </div>
                    <div className="step col-md-8 p-2">
                        <div className="info row col-md-12">
                            <div className="step_info p-3">
                                <div className="info_icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg>
                                <svg className="icon12" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                </div>
                                <div className="info_text">
                                    <h3>Biznes tahlili</h3>
                                    <p>Biz sizning biznesingizni qanday ishlashini tushunish uchun tekshiramiz, shunda biz etkazib berish zanjiri menejmentini batafsil ishlab chiqishimiz mumkin.</p>
                                </div>
                            </div>
                        
                        <div className="step_info p-3">
                            <div className="info_icon">
                                <svg className="icon31" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M360.998 56.998v222.004h14.004V56.998h-14.004zm-288 128v126.004h16.004v-110h127.594L257 328.947l-85.293 38.035 8.02 8.02h40.546l16-16h50.62l-53.54-174.004H72.999zm320 64v30.004h14.004v-30.004h-14.004zm-270.451 20.584C114.487 269.732 106 272 106 272v39.002h9.727l49.646 49.646C163.42 341.07 156.172 287.981 134 272c-2.366-1.705-5.988-2.345-9.85-2.418-.53-.01-1.066-.01-1.603 0zm238.451 27.416v14.004h46.004v-14.004h-46.004zm-336 32v55.121c13.4-15.367 33.091-25.117 55.002-25.117 40.21 0 72.998 32.788 72.998 72.998a73.26 73.26 0 0 1-.346 7.002h79.07c4.342-27.13 27.966-48 56.278-48 26.223 0 48.418 17.908 55.002 42.105v-29.38l-26.729-26.729h-72.546l-16 16h-55.454l-64-64H24.998zm336 0v142.004h14.004V328.998h-14.004zm32 0v62.004h97.277l-14.004-14.004h-69.269v-48h-14.004zM80 376.998c-30.483 0-55.002 24.52-55.002 55.002 0 30.483 24.52 55.002 55.002 55.002 30.483 0 55.002-24.52 55.002-55.002 0-30.483-24.52-55.002-55.002-55.002zm0 30.004c13.7 0 24.998 11.298 24.998 24.998 0 13.7-11.298 24.998-24.998 24.998-13.7 0-24.998-11.298-24.998-24.998 0-13.7 11.298-24.998 24.998-24.998zm208 1.996A38.867 38.867 0 0 0 248.998 448 38.867 38.867 0 0 0 288 487.002 38.867 38.867 0 0 0 327.002 448 38.867 38.867 0 0 0 288 408.998zM288 432a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"></path></svg>
                            </div>
                            <div className="info_text">
                                <h3>Batafsil rejalashtirish</h3>
                                <p>Biz ob'ektlarni, transport vositalarini, eng yaxshi transport yo'nalishlarini aniqlaymiz va keyin optimallashtiramiz.</p>
                            </div>
                        </div>
                        <div className="step_info p-3">
                            <div className="info_icon">
                            <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                            <svg className="icon22" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 336v-40L288 192V79.2c0-17.7-14.8-31.2-32-31.2s-32 13.5-32 31.2V192L64 296v40l160-48v113.6l-48 31.2V464l80-16 80 16v-31.2l-48-31.2V288l160 48z"></path></svg>
                            </div>
                            <div className="info_text">
                                <h3>Amalga oshirish</h3>
                                <p>Tayyorlangan ta'minot zanjirini, shu jumladan uni boshqarish uchun aqlli dasturiy ta'minotni joriy etish.</p>
                            </div>
                        </div>
                        <div className="step_info p-3">
                            <div className="info_icon">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                <svg className="icon42" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"></path></svg>
                            </div>
                            <div className="info_text">
                                <h3>Sifatni nazorat qilish va nazorat qilish</h3>
                                <p>Aqlli dasturiy echimlar yordamida siz etkazib berish va talab holati va barcha transport zanjirida nima bo'layotganini bilib olishingiz mumkin.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className="malumot3">
                    <div className="house row">
                        <div className="house_left col-md-6">
                            <h2>Sizning foydalaringiz</h2>
                            <p>Ammo ba'zi hollarda, biznes majburiyatlari yoki majburiyatlari tufayli, zavqlarni rad etish va bezovtaliklarni qabul qilish kerak bo'ladi. Donishmand har doim bu masalalarda tanlovning bu tamoyiliga amal qiladi: u boshqa katta zavqlarni olish uchun zavqlarni rad etadi, aks holda yomonroq og'riqlardan qochish uchun og'riqlarga dosh beradi.</p>
                            <ul>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Transport yo'nalishlarini, transport vositalarini optimallashtirish va xarajatlarni kamaytirish orqali yuqori sifatli xizmat</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Sizning biznesingizga raqobatbardosh ustunlik beradigan kuchli optimallashtirilgan ta'minot zanjiri infratuzilmasi</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Samarali sifat o'lchash va monitoring sizga xarajatlarni kamaytirish va biznesingizni optimallashtirish imkonini beradi.</li>
                                <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>Sinxronlashtirilgan talab va taklif, bu sizning mijozlaringiz ehtiyojlarini aniqroq va aniqroq aniqlash imkonini beradi</li>
                             </ul>
                        </div>
                        <div className="house_right col-md-6">
                            <img src={house} alt="" />
                        </div>
                    </div>
                </div>
                <div className="malumot4">
                    <div className="mal4_title">
                        <h2>SANOATLAR o'z ichiga olgan</h2>
                    </div>
                    <div className="mal4_end row">
                        <div className="end_card col-md-4 p-2 ">
                            <div className="end_icon"><img src= {end_png1} alt="" /></div>
                            <div className="end_text">To'qimachilik logistikasi</div>
                        </div>
                        <div className="end_card col-md-4 p-2">
                            <div className="end_icon"><img src={end_png2} alt="" /></div>
                            <div className="end_text">Chakana savdo logistikasi</div>
                        </div>
                        <div className="end_card col-md-4 p-2">
                            <div className="end_icon"><img src={end_png3} alt="" /></div>
                            <div className="end_text">
                            Neft va gaz logistikasi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tashqi_yuk