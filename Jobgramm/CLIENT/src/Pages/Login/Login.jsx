import React from "react";
import Header from "../../Components/Header/Header";
import "./login.css";
import Footer from "../../Components/Footer/Footer";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { GetLoginUser } from "../../Redux/Reducers/UserSignUpReducers";
export default function Login() {
  const dispatch = useDispatch();
  const [succesUser,setSuccesuser] = React.useState({});
  const [userLogin,setuserLogin] = React.useState({
    email:"",
    password:""
  });
  const [isTrueUserData,setIsTrueuserData] = React.useState((succesUser.email===userLogin.email)&&(succesUser.password===userLogin.password)?true:false);
  const AllUsers = useSelector(state=>state.dt.UsersData);
 

  const GetLoginData = (e) => {
    const {name,value} = e.target;
    setuserLogin(prev=>{
      return {
        ...userLogin,
        [name]:value
      }
    })
  }

  const SubmitLogin = (e) => {
    e.preventDefault();
    const UserNow = AllUsers.find(obj=>obj.email === userLogin.email);
    // console.log(AllUsers)
    
      if(UserNow === undefined){
        // console.log("There is not user with this email");
        
        setTimeout(()=>{
          window.location.href = `login`
                  },1300)

        setIsTrueuserData(false);
      }
      else{
        if(UserNow.password === userLogin.password){
          // console.log("Succes");
          setSuccesuser(UserNow);
          setIsTrueuserData(true);
          dispatch(GetLoginUser(UserNow))
          setTimeout(()=>{
            window.location.href = `${UserNow._id}`
                    },1300)
        }
        else{
          setIsTrueuserData(false);
          setTimeout(()=>{
            window.location.href = `login`
                    },1300)
          // console.log('Invalid password')
        }
      }
    
    
  }
  
  return (
    <div className="login">
      <Header />
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="formm">
                <div className="sosial-media">
                  
                  <button
                    type="button"
                    className="btn btn-succes btn-floating mx-1"
                  >
                    <FaFacebook className="fab fa-facebook-f" />
                  </button>

                  <button
                    type="button"
                    className="btn btn-succes btn-floating mx-1"
                  >
                    <FaTwitter className="fab fa-twitter" />
                  </button>

                  <button
                    type="button"
                    className="btn btn-succes btn-floating mx-1"
                  >
                    <FaLinkedin className="fab fa-linkedin-in" />
                  </button>
                </div>
                <div className="form-outline mb-4">
                  <input
                    onChange={GetLoginData}
                    value={userLogin.email}
                    name="email"
                    type="email"
                    id="form3Example3"
                    className="formi form-control-lg"
                    placeholder="email"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email ünvanı
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    onChange={GetLoginData}
                    value={userLogin.password}
                    name="password"
                    type="password"
                    id="form3Example4"
                    className="formi form-control-lg"
                    placeholder="parol"
                  />
                  <label className="form-label" for="form3Example4">
                    Parol
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Xatırla
                    </label>
                  </div>
                  <Link to="#!" className="text-body">
                    Parolu unutmusan?
                  </Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link
                    onClick={SubmitLogin}
                    type="submit"
                    className="btn btn-success btn-lg"
                    style={{ paddingLleft: "2.5rem", paddingRight: "2.5rem" }}
                    to = {isTrueUserData?`/userpage/${succesUser._id}`:'/login'}
                  >
                    Giriş
                  </Link>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Hesabın yoxdur?{" "}
                    <Link to="/signup" className="link-success">
                      Qeydiyyat
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
