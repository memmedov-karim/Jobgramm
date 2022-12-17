import React from "react";
import { Headers } from "../../Data/DataForSignUpHeader";
import { Images } from "../../Data/DataForSignUpHeader";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { UpdateUser } from "../../Redux/Reducers/UserSignUpReducers";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";
import "./signup.css";
export default function SignUp() {
  const dispatch = useDispatch();
  // const AllUserss = useSelector((state) => state.dt.UsersData);
  const notification = "Register Completed";
  const warning = "Please fill the Form";
  const [isNotification, setisNotification] = React.useState(false);
  const [isWarning,setisWarning] = React.useState(false);
  // console.log(AllUsers)
  const [user, setUser] = React.useState({
    email: "",
    name: "",
    password: "",
  });
  const [imgs, setimages] = React.useState(Images);
  const [header, setPeople] = React.useState(Headers);
  const GetUserInfo = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const SubmitUser = (e) => {
    e.preventDefault();
    // dispatch(GetUserData(user))
    if (user.email !== "" && user.name !== "" && user.password !== "") {
      
      axios.post("http://localhost:3001/signup", user);
      setUser((prev) => {
        return {
          ...prev,
          email: "",
          name: "",
          password: "",
        };
      });
      setisNotification(true);
      setTimeout(() => {
        setisNotification(false);
      }, 1500);
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
    else{
      setisWarning(true);
      setTimeout(() => {
        setisWarning(false);
      }, 1500);

    }
  };
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    let slider = setInterval(() => {
      index < 3 ? setIndex(index + 1) : setIndex(0);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <Header />

      <div className="signup">
        <h1>{header[index].title}</h1>
        <div className="main">
          <div className="image">
            <img alt="dd" src={imgs[index].image} />
          </div>
          <div className="form-signup">
            {isNotification && (
              <div class="alert alert-success" role="alert">
                {notification}
              </div>
            )}
            {isWarning && <div class="alert alert-danger" role="alert">
  {warning}
</div>}
            <form onSubmit={SubmitUser} className="form">
              <div className="input-elements">
                <label>Şirkət Emaili:</label>
                <input
                  onChange={GetUserInfo}
                  value={user.email}
                  placeholder="email.."
                  name="email"
                  type="email"
                />
              </div>
              <div className="input-elements">
                <label>Şirkət Adı:</label>
                <input
                  onChange={GetUserInfo}
                  value={user.name}
                  placeholder="ad.."
                  name="name"
                  type="text"
                />
              </div>
              <div className="input-elements">
                <label>Parol:</label>
                <input
                  onChange={GetUserInfo}
                  value={user.password}
                  placeholder="parol.."
                  name="password"
                  type="password"
                />
              </div>
              <button
                onClick={SubmitUser}
                type="submit"
                className="btn btn-outline-success"
              >
                Qeydiyyat
              </button>
            </form>
            <div className="d-flex1">
              <small>Artıq bir hesabın var?</small>

              <Link to="/login" className="btn btn-outline-success">
                Giriş
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
