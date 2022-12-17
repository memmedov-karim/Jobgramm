import React  from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {FaBell} from 'react-icons/fa';
import { useSelector,useDispatch } from "react-redux/es/exports";
import { GetShowingData,GetShowingDataWithButton } from "../../Redux/Reducers/UserApplyReducers";
// import JobGramLogo from '../../Pages/Images/JobGramLogo';
import './header.css';
export default function Header(props) {
    const dispatch = useDispatch();
    // console.log(useParams().id)
    const AllJobs = useSelector((state) => state.jb.JobsData);
    const AllApplys = useSelector(state=>state.apply.UserApplyData);
    const ApplyForUser = []
    for(let obj of AllApplys){
      if(obj.id === props.userpage){
        ApplyForUser.push(obj)
      }
    }
    // console.log(props.ApplyForUser)
    // dispatch(GetOnlyCompanyApply(ApplyForUser))
    // const ApplyOnlyCompany = useSelector(state=>state.apply.UserApplyForCompany);
    const [SearcingCategory,setSearchingCategory] = React.useState("");
    const GetSearchingCategory = (e) => {
      setSearchingCategory(e.target.value);
    }
    const CategoryList = [];
    // console.log("Back-End".toLowerCase().split("").join())
    // console.log("back-end".toLowerCase().split("").join())

  
    const SubmitSearchingCategory = (e) => {
      e.preventDefault();
      for(let applys of AllJobs ){
        if(applys.name.toLowerCase().split("").join()===SearcingCategory.toLowerCase().split("").join()){
         
          CategoryList.push(applys);
          
          // console.log(ShowDt)




        }
      }

      dispatch(GetShowingData(CategoryList))
      

      // console.log(SearcingCategory,CategoryList)

    }
   

    // console.log(AllJobs)
    const [AllApplysed,setAllApplysed] = React.useState(false);
    React.useEffect(()=>{
      window.location.pathname.split('/')[1]===id?setAllApplysed(true):setAllApplysed(false);
    },[window.location.pathname])

    const [show,setShow] = React.useState(false);
    const [id,setid] = React.useState(useParams().id)
    let IsCategory = true;
    if(id){
      IsCategory = false
    }
    // console.log(id)
    const [ShowHeaderSearchingBar,setHeaderSearchinBar] = React.useState(false);
    const [isLogin,setisLogin] = React.useState(false);
    const [isSignup,setIsSignup] = React.useState(false);
    const [isuserpage,setIsUserpage] = React.useState(false);
    const [ShowSignUpLogin,setShowSignUpLogin] = React.useState(false);
    const [myjobs,setmyjobs] = React.useState(false);
    // console.log(window.location.pathname)
    React.useEffect(()=>{
        if(window.location.pathname==="/"){
            setisLogin(true);
            setHeaderSearchinBar(false);
            setShowSignUpLogin(true);
            setIsSignup(true);

        }
        if(window.location.pathname==='/login'){
            setisLogin(false);
            setHeaderSearchinBar(false);
            setShowSignUpLogin(true);
        }
        if(window.location.pathname === '/alljobs'){
            setisLogin(true);
            setHeaderSearchinBar(true);
            setShowSignUpLogin(true);
            setIsSignup(true);
        }
        if(window.location.pathname === '/company'){
            setisLogin(true);
            setHeaderSearchinBar(false);
            setShowSignUpLogin(true);
            setIsSignup(true);

        }
        if(window.location.pathname==='/signup'){
          setisLogin(true);
          setHeaderSearchinBar(false);
          setShowSignUpLogin(true);
          setIsSignup(false);
        }
        if(window.location.pathname === '/login'){
          setisLogin(false);
          setHeaderSearchinBar(false);
          setShowSignUpLogin(true);
          setIsSignup(true);

        }
        if(window.location.pathname === `/${props.userpage}`){
          setIsUserpage(true);
          setShowSignUpLogin(false);
          setHeaderSearchinBar(true);
          setmyjobs(true);
        }
        if(window.location.pathname === `/${props.userpageid}/alljobs`){
          setIsUserpage(true);
          setShowSignUpLogin(false);
          setHeaderSearchinBar(true);
          setmyjobs(true);
        }
        if(window.location.pathname === `/${props.userpageid}/allapplys`){
          setmyjobs(true)
        }
        
    },[props.userpage,props.userpageid])
    // console.log(props.userpage)
    // console.log(props.userpageid)
    const [IsCompany,setIsCompany] = React.useState(false);
    React.useEffect(()=>{
      if(props.userpage===undefined && props.userpageid===undefined ){
        setIsCompany(true)

      }
      else{
        setIsCompany(false)
      }

    },[])
    
    // console.log(props.userpageid)
    const ShowAboutModal = (e) => {
      setShow(true);
      // console.log("About ok?")
    }
    const handleClose = (e) => {
      setShow(false)
    }
    // console.log(ApplyOnlyCompany)
    
  const CategoryListM = [];
  for (let i of AllJobs) {
    if (CategoryListM.includes(i.category.toUpperCase()) === false) {
      CategoryListM.push(i.category.toUpperCase());
    }
  }
  const GetDataWithCategory = (e) => {
    // console.log(e.target);
    // const Datam = AllJobs.find(obj=>obj.category.toLowerCase() === e.target.value.toLowerCase());

    const DataForClickButton = AllJobs.filter(function (el) {
      // console.log(el.category,e.target.value)
      return el.category.toLowerCase() === e.target.textContent.toLowerCase();
    });

    dispatch(GetShowingDataWithButton(DataForClickButton));
    // console.log(DataForClickButton)
  };
  const CtgrEl = CategoryListM.map((it, ind) => {
    return (
      <li key={ind}>
                    <button onClick={GetDataWithCategory} className="dropdown-item" >
                      {it}
                    </button>
                </li>
    );
  });
  const AllUserss = useSelector((state) => state.dt.UsersData);
  const UserPrivate = AllUserss?.find(users=>users._id === id);
  const CompanyName = UserPrivate===undefined?"":UserPrivate.name
  // console.log(UserPrivate)
  return (
    <div id="headerHeader" className="header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={window.location.pathname.split('/')[1]===id?`/${id}`:'/'}>
          {window.location.pathname.split('/')[1]===id?`${CompanyName}`:<img style={{width:"120px"}} alt="logo" src='https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGf40+Dcrho1xwiRjmpmYzFB9QhvlSQlkLc1rLx+fxAB51cDhhYOdcU5nnUlDt5c0UUgvDKM ' />}
          </Link>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>Bizim website haqqında</Modal.Header>
            <Modal.Body>

              <h2>Bu website iş tapmaq ve əlave etmək ücündür</h2>
              

            </Modal.Body>


            <Modal.Footer>
              <button className="btn btn-success" onClick={handleClose}>Bağla</button>
            </Modal.Footer>

          </Modal>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link onClick={ShowAboutModal} className="nav-link active" aria-current="page">
                  Haqqımızda
                </Link>
              </li>
              {AllApplysed && <li className="nav-item">
                <Link className="nav-link" to={window.location.pathname.split('/')[1]===id?`/${id}/allapplys`:'/'}>
                  Bütün müraciətlər<FaBell style={{color:props.ApplyForUser.length>0?"red":"black"}} />{props.ApplyForUser.length}
                  
                </Link>
              </li>}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seçimlər
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={window.location.pathname.split('/')[1]===id?`/${id}/alljobs`:'/alljobs'}>
                      İşlər
                    </Link>
                  </li>
                  {IsCompany && 
                  <li>
                  <Link className="dropdown-item" to='/company'>
                    Şirkətlər
                  </Link>
                </li>
                  }
                  {myjobs && <li>
                    <Link className="dropdown-item" to={`/${id}/addjobs`}>
                      Mənim işlərim
                    </Link>
                  </li>}
                  {/* <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li> */}
                </ul>
              </li>
              {IsCategory && window.location.pathname === "/alljobs" &&  <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategorya
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={()=>{window.location.reload()}} className="dropdown-item" to="#" >
                      Hamsi
                    </button>
                  </li>
                  {CtgrEl}
                  
                  {/* <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li> */}
                </ul>
              </li>}
            </ul>
            {ShowHeaderSearchingBar && <form onSubmit={SubmitSearchingCategory} className="d-flex" role="search">
      
              <input
                id="headerFormControl"
                onChange={GetSearchingCategory}
                value={SearcingCategory}
                className="form-control me-2"
                type="search"
                placeholder="axtar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Axtar
              </button>
              {isuserpage && <Link to='/' className="btn btn-outline-success">Çıxış</Link>}
            </form>}
             {ShowSignUpLogin && <div className="sign-login d-flex">
              {isSignup && <Link id="headerBtn" to='/signup' className="btn btn-outline-success">Qeydiyyat</Link>}
              {isLogin && <Link id="headerBtn" to='/login' className="btn btn-outline-success">Giriş</Link>}
              
            </div>}
          </div>
        </div>
      </nav>
    </div>
  );
}
