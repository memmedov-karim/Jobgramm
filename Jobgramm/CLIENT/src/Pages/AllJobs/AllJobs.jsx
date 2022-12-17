import React from "react";
import "./alljobs.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Modal, Form } from "react-bootstrap";
import {FaEye,FaCheck} from 'react-icons/fa';
import { UpdateJobs } from "../../Redux/Reducers/UserAddJobReducers";
import SvgForhome from "../../Components/Svg/SvgForhome";
import axios from "axios";
export default function AllJobs() {
  const dispatch = useDispatch();
  const AllJobs = useSelector((state) => state.jb.JobsData);
  // const AllApplys = useSelector((state) => state.apply.UserApplyData);
  // console.log(AllApplys)

  const [FormSend, setFormSend] = React.useState(true);
  // const ApplyOnlyCompany = useSelector(state=>state.apply.UserApplyForCompany);
  // console.log(ApplyOnlyCompany)
  const ShowDt = useSelector((state) => state.apply.ShowingData);
  // console.log(ShowDt)
  const [UserApplyData, setUserApplyData] = React.useState({
    name: "",
    surname: "",
    university: "",
    faculty: "",
    course: "",
    englishlevel: 0,
    russianlevel: 0,
    cv: "",
    email: "",
    hobby: "",
    id: "",
  });
  const GetUserApplyData = (e) => {
    const { name, value } = e.target;
    setUserApplyData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
 
  const SubmitApplyData = (e,id) => {


    e.preventDefault();
    axios.put(`http://localhost:3001/applying/${id}`)
    const ReturnedData = AllJobs.map((val)=>{
      return val._id === id
      ? 
      {...val,count_apply:val.count_apply+1}
      :
      val
    })
    dispatch(UpdateJobs(ReturnedData))
    axios.post("http://localhost:3001/userapply", UserApplyData);
    setFormSend(false);
    setTimeout(() => {
      setShowApply(false);
    }, 1300);
    
    // console.log(DataUserId)
    // console.log(UserApplyData);
  };
  const StyleEnglish = {
    color:
      UserApplyData.englishlevel <= 20
        ? "red"
        : UserApplyData.englishlevel > 20 && UserApplyData.englishlevel <= 50
        ? "yellow"
        : UserApplyData.englishlevel > 50 && UserApplyData.englishlevel <= 70
        ? "orange"
        : "green",
  };
const StyleEnglishBackground = {
    backgroundColor:
      UserApplyData.englishlevel <= 20
        ? "red"
        : UserApplyData.englishlevel > 20 && UserApplyData.englishlevel <= 50
        ? "yellow"
        : UserApplyData.englishlevel > 50 && UserApplyData.englishlevel <= 70
        ? "orange"
        : "green",
  };
  const LevelEnglish = 
      UserApplyData.englishlevel <= 20
        ? "beginner"
        : UserApplyData.englishlevel > 20 && UserApplyData.englishlevel <= 50
        ? "intermediate"
        : UserApplyData.englishlevel > 50 && UserApplyData.englishlevel <= 70
        ? "upper-intermediate"
        : "advanced"
  const LevelRussian = 
        UserApplyData.russianlevel <= 20
          ? "beginner"
          : UserApplyData.russianlevel > 20 && UserApplyData.russianlevel <= 50
          ? "intermediate"
          : UserApplyData.russianlevel > 50 && UserApplyData.russianlevel   <= 70
          ? "upper-intermediate"
          : "advanced"
  
  const StyleRussian = {
    color:
      UserApplyData.russianlevel <= 20
        ? "red"
        : UserApplyData.russianlevel > 20 && UserApplyData.russianlevel <= 50
        ? "yellow"
        : UserApplyData.russianlevel > 50 && UserApplyData.russianlevel <= 70
        ? "orange"
        : "green",
  };
const StyleRussianBackground = {
    backgroundColor:
      UserApplyData.russianlevel <= 20
        ? "red"
        : UserApplyData.russianlevel > 20 && UserApplyData.russianlevel <= 50
        ? "yellow"
        : UserApplyData.russianlevel > 50 && UserApplyData.russianlevel <= 70
        ? "orange"
        : "green",
  };
  const [show, setShow] = React.useState(false);
  const [ShowApply, setShowApply] = React.useState(false);
  const [Modalinfo, setModalinfo] = React.useState({
    category: "",
    name: "",
    salary: "",
    workinghours: "",
    location: "",
    worktype: "",
    finishdate: "",
    image: "",
    description: "",
  });
  const handleClose = () => {
    setShow(false);
    
  };
  const handleCloseApply = () => {
    setShowApply(false);
    
    
  };
  const handleOpenApply = () => {
    setShowApply(true);
    setShow(false);
    setFormSend(true);
  };

  
  console.log(AllJobs,AllJobs.length)
  const data = [];
  for (let i = 0; i < 16; i++) {
    data.push(i);
  }
  
  const [job_id,setJobId] = React.useState("");
  const AllApplys = useSelector((state) => state.apply.UserApplyData);
  const GetDetail = (id) => {
    console.log(id)
    const ReturnedData = AllJobs.map((val)=>{
      return val._id === id
      ? {...val,count_showing:val.count_showing+1}
      :
      val
    })
    dispatch(UpdateJobs(ReturnedData))
    setJobId(id);
    


    axios.put(`http://localhost:3001/showing/${id}`);
    
    
    // console.log(ReturnedData)
    
    
    // console.log("ok")
    // console.log(AllApplys,id)
    
    // for(let app of AllApplys){
    //   if(app.id === id){
    //     // setcount(count=>count+1)
    //   }
    // }
    
    const ModalInfo = AllJobs.find((obj) => obj._id === id);
    setUserApplyData((prev) => {
      return {
        ...prev,
        id: ModalInfo.id,
      };
    });
    // console.log(ModalInfo);
    setModalinfo((prev) => {
      return {
        ...prev,
        company_name:ModalInfo.company_name,
        category: ModalInfo.category,
        name: ModalInfo.name,
        salary: ModalInfo.salary,
        workinghours: ModalInfo.workinghours,
        location: ModalInfo.location,
        worktype: ModalInfo.worktype,
        finishdate: ModalInfo.finishdate,
        image: ModalInfo.image,
        description: ModalInfo.description,
      };
    });
    // console.log(ModalInfo);

    setShow(true);
    // console.log(id);
  };
  const ShowDtButton = useSelector(
    (state) => state.apply.ShowingDataWithButton
  );
  // console.log(ShowDt.length);
  // console.log(ShowDtButton.length);
  // if (ShowDt.length !== 0 && ShowDtButton !== 0) {
  //   dispatch(GetShowingDataWithButton([]));
  //   dispatch(GetShowingData([]));
  // }
  
  let GeneralData =
    ShowDt.length !== 0 && ShowDtButton.length === 0
      ? ShowDt
      : ShowDt.length === 0 && ShowDtButton.length !== 0
      ? ShowDtButton
      : AllJobs;
  const [usdt,setusdt] = React.useState([])
  
  // const AllUserss = useSelector((state) => state.dt.UsersData);
  const [NowDate,setNowDate] = React.useState((new Date()).getTime());
  let color = "green"
  let word = 'aktiv';
  // console.log(GeneralData,AllApplys)
  const [showDetailShowing,setShowDetailShowing] = React.useState(false);
  const ShowMouseOver = () => {

    setShowDetailShowing(true)
  }
  const ShowMouseOut = () => {
    setShowDetailShowing(false);
  }
  const [comment,setComment] = React.useState("")
  const WriteComment = (e,id) => {
    setComment(e.target.value)
    // console.log(id)
  }
  const SubmitComment =(e,id) => {
    e.preventDefault();
    const ReturnedData = AllJobs.map((val)=>{
      return val._id === id
      ? {...val,comments:[...val.comments,comment]}
      :
      val
    })
    dispatch(UpdateJobs(ReturnedData))
    axios.put(`http://localhost:3001/comment/${id}`,{comments:comment})
    // console.log(comment)
  }
  const Cards = GeneralData.map((el, ind) => {

    if((new Date(el.finishdate)).getTime()>=NowDate){
      color = "green"
      word = "aktiv"
    }
    else{
      word='bitib'
      color = "red";
      const ReturnedData = AllJobs.filter((val)=>{
        return val._id !== el._id 
      })
      
      setTimeout(()=>{
        axios.delete(`http://localhost:3001/deletejobs/${el._id}`);
        
        dispatch(UpdateJobs(ReturnedData))
        
      },10000)
      
      
    }
    return (
      <div key={ind} onMouseOut={ShowMouseOut} onMouseMove={ShowMouseOver} id="allJobsCol" className="col">
        {/* {<div  className="show_apply">
          <div className="show">
          <FaEye />  <small>{el.count_showing}</small>

          </div>
          <div className="apply">
          <FaCheck />  <small>{el.count_apply}</small>

          </div>
        
        

        </div>} */}
        
        {/* <p>Baxis{el.count_showing},Muraciet{el.count_apply}</p> */} 
        <button onClick={() => GetDetail(el._id)} id="allJobsDetail" className="detail">
          Ətraflı
        </button>
        <div className="card h-100">
          <img src={el.image} id="allJobsCardImgTop" className="card-img-top" alt="..." />
          <div id="allJobsCardBody" className="card-body">
            <h6>Şirkət:<b>{el.company_name}</b></h6> 
            <h6 id="allJobsCardTitle" className="card-title">
              {el.name}:<b>{el.salary}</b>
            </h6>
            <p className="card-text">{el.description}</p>
          </div>
          <div id="allJobsCardFooter" className="card-footer">
            <small className="text-muted">bitmə vaxtı - <span style={{color:color}}>{el.finishdate}</span>-{word}</small>
            <div>
            <small><FaEye />  <small>{el.count_showing}</small></small>
            <small><FaCheck />  <small>{el.count_apply}</small></small>

            </div>
            
          </div>
          {false &&  <div className="comments">
            <form onSubmit={(e)=>SubmitComment(e,el._id)}>
            <input onChange={(e)=>WriteComment(e,el._id)} type="text" placeholder="comment.." />
            </form>
            <ol>
            {el.comments.map((el)=>{
              return <li>{el}</li>

            })}
            </ol>
          </div>}
        </div>
      </div>
    );
  });

  const [loading,setloading] = React.useState()
  React.useEffect(()=>{
    if(AllJobs.length===0){
      setloading(<SvgForhome />)
    }
    else{
      setloading(null)
    }
  },[AllJobs.length])
  console.log(loading)
  const IsFilled = (UserApplyData.name!=="" && UserApplyData.surname!=="" && UserApplyData.university!=="" && UserApplyData.course!=="" && UserApplyData.faculty!=="" && UserApplyData.englishlevel!==0 && UserApplyData.russianlevel!==0 && UserApplyData.cv !=="" && UserApplyData.email !=="" && UserApplyData.hobby!=="")?true:false
  

  return (
    <div className="alljobs">
      <Header  />
      
      
      
      {/* Apply Modal start */}
      <Modal fullscreen={true} show={ShowApply} onHide={handleCloseApply}>
        <Modal.Header>{Modalinfo.name} işi üçün müraciət et</Modal.Header>
        <Modal.Body>
          {!FormSend && (
            <div className="submitted">
              <img
                style={{ width: "100px", height: "100px" }}
                alt="img"
                src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
              />
              <h2>Müraciətiniz müvaffaqiyyətlə göndərildi</h2>
            </div>
          )}
          {FormSend && (
            <Form.Group id="allJobsFormGroup" className="form-group">
              <Modal.Dialog id="allJobsModalDialog" className="modal-dialog">
                <Form.Label>Ad:</Form.Label>
                <Form.Control

                  className="leftControl"
                  onChange={GetUserApplyData}
                  name="name"
                  type="text"
                  placeholder="ad.."
                />
                <Form.Label>Soyad:</Form.Label>
                <Form.Control
                  className="leftControl"
                  onChange={GetUserApplyData}
                  name="surname"
                  type="text"
                  placeholder="soyad.."
                />
                <Form.Label>Universitet:</Form.Label>
                <Form.Control
                  className="leftControl"
                  onChange={GetUserApplyData}
                  name="university"
                  type="text"
                  placeholder="universitet.."
                />
                <Form.Label>Fakültə:</Form.Label>
                <Form.Control
                  className="leftControl"
                  onChange={GetUserApplyData}
                  name="faculty"
                  type="text"
                  placeholder="fakültə.."
                />
                <Form.Label>Kurs:</Form.Label>
                <Form.Control
                  className="leftControl"
                  onChange={GetUserApplyData}
                  name="course"
                  type="text"
                  placeholder="kurs.."
                />
              </Modal.Dialog>
              <Modal.Dialog id="allJobsModalDialog" className="modal-dialog">
                {/* <small>Language Skills</small> */}
                <Form.Label
                style={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"space-between"
                }}
                >
                <span>Ingilis səviyyəsi:<span  style={StyleEnglish}>{UserApplyData.englishlevel}</span>%</span>
                  <small className="levellanguage">{LevelEnglish}</small>
                  
                </Form.Label>
                <Form.Control
                  onChange={GetUserApplyData}
                  name="englishlevel"
                  defaultValue={0}
                  type="range"
                  min="0"
                  max="100"
                />
                <Form.Label style={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"space-between"
                }}>
                  
                  <span>Rus səviyyəsi:<span  style={StyleRussian}>{UserApplyData.russianlevel}</span>%</span>
                  <small className="levellanguage">{LevelRussian}</small>
                  
                </Form.Label>
                <Form.Control
                  onChange={GetUserApplyData}
                  name="russianlevel"
                  defaultValue={0}
                  type="range"
                  min="0"
                  max="100"
                />

                <Form.Label>Cv-nizin yerləşdiyi platforma linkini əlavə edin.(Github,GoogleDrive,Mega və s):</Form.Label>
                <Form.Control
                  onChange={GetUserApplyData}
                  name="cv"
                  type="text"
                  placeholder="add your cv link.."
                />
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  onChange={GetUserApplyData}
                  name="email"
                  type="email"
                  placeholder="email.."
                />
                <Form.Label>Marağ:</Form.Label>
                <Form.Control
                  onChange={GetUserApplyData}
                  name="hobby"
                  as="textarea"
                  placeholder="marağlar..."
                />
              </Modal.Dialog>
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!IsFilled && <p style={{marginRight:"20%",color:"red"}}>Zəhmət olmasa məlumatları tələb olunan formada doldurun*</p>}
          <button className="btn btn-warning" onClick={handleCloseApply}>
            Bağla
          </button>
          <button disabled={!IsFilled} onClick={(e)=>SubmitApplyData(e,job_id)} className="btn btn-success">
            Müraciət et
          </button>
        </Modal.Footer>
      </Modal>
      {/* Apply Modal end */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{Modalinfo.name} işi haqqında</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            {/* <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>Şirkət</td>
                <td>{Modalinfo.company_name}</td>
              </tr>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>Kategorya</td>
                <td>{Modalinfo.category}</td>
              </tr>
              <tr>
                {/* <th scope="row">2</th> */}
                <td>Ad</td>
                <td>{Modalinfo.name}</td>
              </tr>
              <tr>
                {/* <th scope="row">3</th> */}
                <td>Maaş</td>
                <td>{Modalinfo.salary}</td>
              </tr>
              <tr>
                {/* <th scope="row">4</th> */}
                <td>İş saatı</td>
                <td>{Modalinfo.workinghours}</td>
              </tr>
              <tr>
                {/* <th scope="row">5</th> */}
                <td>Ünvan</td>
                <td>{Modalinfo.location}</td>
              </tr>
              <tr>
                {/* <th scope="row">6</th> */}
                <td>İş forması</td>
                <td>{Modalinfo.worktype}</td>
              </tr>
              <tr>
                {/* <th scope="row">7</th> */}
                <td>Bitmə vaxtı</td>
                <td>{Modalinfo.finishdate}</td>
              </tr>
              <tr>
                {/* <th scope="row">8</th> */}
                <td>Şəkil</td>
                <td>
                  <img
                    style={{ width: "60px", height: "60px" }}
                    alt="im"
                    src={Modalinfo.image}
                  />
                </td>
              </tr>
              <tr>
                {/* <th scope="row">9</th> */}
                <td>Açıqlama</td>
                <td>{Modalinfo.description}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning" onClick={handleClose}>
            Bağla
          </button>
          <button onClick={handleOpenApply} className="btn btn-success">
            Müraciət
          </button>
        </Modal.Footer>
      </Modal>

      {loading?<div className="row rw row-cols-1 row-cols-md-3 g-4">{loading}</div>:<div id="allJobsRw" className="row rw row-cols-1 row-cols-md-3 g-4">{Cards}</div>}

      

      <Footer />
    </div>
  );
}
