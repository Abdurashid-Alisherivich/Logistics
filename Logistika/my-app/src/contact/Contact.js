import React , {useState , useEffect} from "react";
import axios from 'axios'
import './Contact.scss'
import Maps from "../Map/Map";


const Contact = () =>{



  

const  [contact, setContact] = useState({
    name: '',
    number: '',
    message: '',
    type: '',
    vaqti: new Date().toDateString()
  })

  const changeHandle = (e) => {
    setContact({...contact , [e.target.name]:e.target.value})
  }
  async function SendForm(e){
    await axios.post('http://localhost:5000/contact', contact)
    .then((res)=>{  
      console.log(res)
    }) .catch((err)=>{
      console.log(err)
    })
    e.preventDefult()
  }


    return(
        <>

     
      <div className="main-contact">
      
        <p className="contact-contact">BOG'LANISH</p>
      </div>
      

              
        <div className="container ">

        <div className="row">
          

            <div className="column" >
            <div className="yellow-line"></div>
              <h3 className="yetkazib-berish">TO'LDIRISH SHARTLAR</h3>
              <p>Hurmatli mijoz Sizning ma'lumotlaringiz <br />
               biz uchun muhim hisoblanadi. Sizni yaxshi <br />
                va qulay xizmat bilan ta'minlash uchun <br />
                 bo'shliqlarni to'g'ri to'ldiring. <br />
                  Bizni tanlaganingizdan hursandmiz!</p>
            <form onSubmit={SendForm}>
              <p className="contact-letters"><i className="yulduzcha">*</i> F. I. SH</p>
                  <input type="text"  className="form-control"
                    name="name"
                    onChange={changeHandle}
                    value={contact.name}
                   
                  />
                 
                 <p className="contact-letters"><i className="yulduzcha">*</i> Telefon raqam</p>
                  <input type="number"  className="form-control"
                    name="number"
                    onChange={changeHandle}
                    value={contact.number}
                  
                  />
                  <p className="contact-letters"><i className="yulduzcha">*</i> Turi</p>
                  <select class="form-select form-control"
                   aria-label="Default select example"
                   name="type"
                   onChange={changeHandle}
                   value={contact.type}
                   >
                    <option selected className="contact-letters">Turi</option>
                    <option value="1" >Ichki</option>
                    <option value="2" >Tashqi</option>
                   
                  </select>

                

                  
                    <div class="form-floating">
                      <textarea class="form-control message-box" 
                      name="message"
                      onChange={changeHandle}
                      value={contact.message}
                      placeholder="Leave a comment here" 
                      id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>


                  <input type="submit"
                    className=" send-button btn-primary"
                    value="Send"
                   
                  />
                </form>
            </div>
            
                      <div className="column" >
                      <div className="yellow-line"></div>
                        <h3 className="yetkazib-berish">YETKAZIB BERISH MARKAZLARI</h3>
                      <div className="col-sm-12 col-md-5">
                                    <Maps />
                      </div>
                      <h3 className="yetkazib-berish" >KOMPANIYA HAQIDA</h3>
                      <div className="company-address">
                        <p className="company-info">Third floor, Verona building, <br />
                         Fergana</p>
                        <p className="tel-nomer">+998907878899</p>
                        <p className="company-info"><a href="https://technobeck.uz/">Technobech.uz</a></p>
                      </div>
                      </div>
           
        </div>

                    
        </div>
                  






                   

        </>
    )
}

export default Contact