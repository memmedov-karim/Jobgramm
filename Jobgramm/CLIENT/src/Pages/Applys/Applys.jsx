import React from "react";

import {FaEye,FaEyeSlash} from 'react-icons/fa';
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import axios from "axios";
// import {SlArrowRightCircle} from 'react-icons/sl';
import emailjs from '@emailjs/browser';
import { Modal, Form } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import './applys.css'
import { useRef } from "react";
export default function Applys() {
    const [Loading,setLoading] = React.useState(false)
    const [disable,setDisable] = React.useState(false);
    const [checkcount,setCheckCont] = React.useState(0);
    const [show,setShow] = React.useState(false);
    const [useremail,setuseremail] = React.useState("");
    const [name,setusername] = React.useState("");
    const [sended,setsended] = React.useState(true);
    const handleClose = (e) => {
        setShow(false);
    }
    const handleOpen = (email,name) => {
        setsended(true);
        setShow(true);
        setuseremail(email);
        setusername(name);
    }
    // Email send To User start
    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true);
        setCheckCont(checkcount+1);
        e.preventDefault();
        emailjs.sendForm(
            "service_c504dow",
            "template_e5kunfv",
            form.current,
            "Ir7Zp7nmc9gZfqeoz"

        )
        .then((result) => {
            // console.log(result.text);
            console.log("result")
        }, (error) => {
            console.log(error.text);
        })


        
        setTimeout(() => {
            // setShow(false);
            setsended(false);

            
        }, 1500);

        
      
    }
    React.useEffect(()=>{
      if(checkcount===2){
        setDisable(true);
        setShow(false);
        setCheckCont(0);
        setLoading(false)
        
      }
      else{
        setDisable(false);
      }
    },[checkcount])

    // Email send To user ennnnnddddd
  
  const AllApplys = useSelector((state) => state.apply.UserApplyData);
  const [id, setid] = React.useState(useParams().id);
  const ApplyForUser = [];
  for (let obj of AllApplys) {
    if (obj.id === id) {
      ApplyForUser.push(obj);
    }
  }
  const form1 = useRef();
  const DeleteApply = (e,id,email,name) => {
    e.preventDefault();
    console.log(email,name)
    emailjs.sendForm(
      "service_c504dow",
      "template_e5kunfv",
      form1.current,
      "Ir7Zp7nmc9gZfqeoz"

  )
  .then((result) => {
      // console.log(result.text);
      console.log(result)
  }, (error) => {
      console.log(error.text);
  })

    
    // console.log(email,name)
    // setuseremail(email);
    // setusername(name)
    
    
    setTimeout(()=>{
      axios.delete(`http://localhost:3001/deleteapply/${id}`);
    },1000)
    setTimeout(()=>{
        window.location.reload()
      },1500)
    // console.log(id)
   
        
    
  
  }
  const [MosueOver,setMouseOver] = React.useState(true);
  const MouseOver = (e) => {
    setMouseOver(false);
  }
  const MouseDown = (e) => {
    setMouseOver(true);
  }
  const [cvLink,setCvLink] = React.useState("");
  const [showCv,setShowCv] = React.useState(false);
  const handleCloseCv = () => setShowCv(false);
  const handleOpenCv = (id) => {
    const obj = AllApplys.find(ob=>ob._id===id)
    // console.log(id) 
    setCvLink(obj.cv)
    setShowCv(true)
  };
    // console.log(cvLink)
  const TrElementa = ApplyForUser.map((apply,ind)=>{
    let neww = cvLink.split('/')[0]+"//"+cvLink.split('/')[2]+"/"+cvLink.split('/')[3]+"/"+cvLink.split('/')[4]+"/"+cvLink.split('/')[5]+"/preview"
    return (

        <tr key={ind}>
            <th scope="row">{ind+1}</th>
            <td>{apply.name} {apply.surname}</td>
            <td>{apply.university},{apply.faculty},{apply.course}</td>
            <td>İng:{apply.englishlevel},Rus:{apply.russianlevel}</td>
            <td><button className="btn btn-success" onMouseOut={MouseDown} onMouseOver={MouseOver} onClick={()=>handleOpenCv(apply._id)}>Bax-{!MosueOver && <FaEye />}{MosueOver && <FaEyeSlash />}</button><Modal size="md" show={showCv} onHide={handleCloseCv}> <button style={{width:"100%",marginLeft:"0px"}} className="btn btn-warning" onClick={handleCloseCv}>Bağla</button> <iframe title="Cv" src={neww} width="500" height="500" /></Modal>
            </td>
            <td>{apply.hobby}</td>
            <td className="btns">
              <form ref={form1}>
                <div style={{display:"none"}}>
              <Form.Label>Muraciəd edən</Form.Label>
          
                <Form.Control defaultValue={ApplyForUser.find(ob=>ob._id === apply._id).name} type="text" name="user_name" />
                <Form.Label>Müraciət edənin emaili</Form.Label>
                <Form.Control defaultValue={ApplyForUser.find(ob=>ob._id === apply._id).email} type="text" name="user_email" />
                <Form.Label>Şirkət adı</Form.Label>
                <Form.Control defaultValue="FindJob" type="text" name="company_name" />
                <Form.Label>Mövzu</Form.Label>
                <Form.Control defaultValue="Sizin işə baxıldı təəsüflə bildirmək istəyərdikki bu dəfə alınmadı ama üzülməyin inşallah bir gün alınar" as="textarea" name="message" />
                </div>
                <button onClick={(e)=>DeleteApply(e,apply._id,apply.email,apply.name)} className="btn btn-danger">Sil</button>
                </form>
                <button onClick={()=>handleOpen(apply.email,apply.name)} className="btn btn-success">Qəbul et</button>
            </td>
          </tr>

    )
  })
    
  
  return (
    <div>
      <Header userpageid={useParams().id} ApplyForUser={ApplyForUser} />
    <div class="table-responsive">
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Müraciət edənlə əlaqə</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!sended && 
          <div className="submitted">
              <img style={{width:"100px",height:"100px"}} alt="im" src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg" />
              <h2>Mesajınız müvəfəqqiyətlə göndərildi</h2>
          </div>
          }
            
            {sended && <form ref={form}>
                <Form.Label>Muraciəd edən</Form.Label>
                <Form.Control defaultValue={name} type="text" name="user_name" />
                <Form.Label>Müraciət edənin emaili</Form.Label>
                <Form.Control defaultValue={useremail} type="text" name="user_email" />
                <Form.Label>Şirkət adı</Form.Label>
                <Form.Control type="text" name="company_name" />
                <Form.Label>Mövzu</Form.Label>
                <Form.Control  as="textarea" name="message" />
                {Loading && <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Yüklənir...</span>
  </div>
</div>}

            </form>}
        </Modal.Body>
        <Modal.Footer>
          {sended && <button className="btn btn-warning" onClick={handleClose}>Bağla</button>}
          <button disabled={disable} onClick={sendEmail} className="btn btn-success">{sended?"send":"finish"}</button>
        </Modal.Footer>
      </Modal>
        
        <div className="head">
            <h1>Bütün Müraciətlər</h1>
        </div>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Ad/Soyad</th>
            <th scope="col">Uni/Fakültə/Kurs</th>
            <th scope="col">İngilis/Rus Səviyyə</th>
            <th scope="col">Cv</th>
            <th scope="col">Marağ</th>
          </tr>
        </thead>
        <tbody>
          {TrElementa}
        </tbody>
      </table>
    </div>
    </div>
  );
}
