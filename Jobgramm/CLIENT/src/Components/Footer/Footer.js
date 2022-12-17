import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import {FaGoogle,FaAmazon,FaEbay,FaApple,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaEnvelope,FaPhone,FaPrint,FaHome} from 'react-icons/fa'
export default function Footer() {
  return (
<footer className="text-center text-lg-start bg-light text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Bizimlə sosial şəbəkələrdən əlaqəyə keçin:</span>
    </div>

    <div>
      <Link to="" className="me-4 link-secondary">
        <FaFacebook id="footerSocial" className="fab fa-facebook-f" />
      </Link>
      <Link to="" className="me-4 link-secondary">
        <FaTwitter id="footerSocial"  className="fab fa-twitter" />
      </Link>
      <Link to="" className="me-4 link-secondary">
        <FaInstagram id="footerSocial"  className="fab fa-instagram" />
      </Link>
      <Link to="" className="me-4 link-secondary">
        <FaLinkedin id="footerSocial" className="fab fa-linkedin" />
      </Link>
      <Link to="" className="me-4 link-secondary">
        <FaGithub id="footerSocial"  className="fab fa-github" />
      </Link>
    </div>

  </section>

  <section id="sec1" className="sec1">
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
   
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Şirkət adı
          </h6>
          <p>
            Jobgram şirkəti 2022-ci ildə qurulub və bütün şirkətləri öz vakasiyalarını yerləşdirmək və onları eyni bir platformada toplamaq üçündür
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Sponsorlar
          </h6>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">Google</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">Apple</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">Amazon</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">E-Bay</Link>
          </p>
        </div>
 
     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Platformalar
          </h6>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">FindJob</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">GetTaxi</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">Medicine</Link>
          </p>
          <p>
            <Link id="footerLink" to="#!" className="text-reset">Karim.Express</Link>
          </p>
        </div>
   

       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Əlaqə</h6>
          <p><FaHome id="footerContact" className="fas fa-home me-3 text-secondary" /> Ali Mustafayev 1D</p>
          <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <FaEnvelope id="footerContact" className="fas fa-envelope me-3 text-secondary" />
            find.your.job.2023@gmail.com
          </p>
          <p><FaPhone id="footerContact" className="fas fa-phone me-3 text-secondary" /> +994-70-238-88-38</p>
          <p><FaPrint id="footerContact" className="fas fa-print me-3 text-secondary" /> 012-334-03-09</p>
        </div>
   
      </div>
 
    </div>
  </section>
 
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    <Link className="text-reset fw-bold" to="/">Jobgram.com</Link>
  </div>

</footer>

  )
}
