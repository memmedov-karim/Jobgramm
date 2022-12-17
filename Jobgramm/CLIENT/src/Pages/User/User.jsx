import React from "react";
import SvgForhome from "../../Components/Svg/SvgForhome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { GetOnlyCompanyApply } from "../../Redux/Reducers/UserApplyReducers";
import Header from "../../Components/Header/Header";
import HomePageAnim from "../../Components/HomePageAnimations/HomePageAnim";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
export default function User() {
  // const currentDate = new Date();
  // const month = currentDate.getMonth()+1;
  // let day = currentDate.getDay();
  // if(day<10){
  //   day = `0${day}`
  // }
  // const year = currentDate.getFullYear();
  // const cuurentDateWithFormat = `${year}-${day}-${month}`;
  // console.log((currentDate.getTime()))
  const [NowDate,setNowDate] = React.useState((new Date()).getTime());


  

  const dispatch = useDispatch();
  const AllApplys = useSelector((state) => state.apply.UserApplyData);
  // console.log(AllApplys)
  const [id, setid] = React.useState(useParams().id);
  const ApplyForUser = [];
  for (let obj of AllApplys) {
    if (obj.id === id) {
      ApplyForUser.push(obj);
    }
  }

  // console.log(ApplyForUser)
  // console.log(useParams())
  const AllUserss = useSelector((state) => state.dt.UsersData);
  const AllJobs = useSelector((state) => state.jb.JobsData);
  const GeneralData = [];
  for(let job of AllJobs){
    if(job.id === id){
      GeneralData.push(job)
    }
  }
  const user = AllUserss.find((obj) => obj._id === id);
  // console.log(user)
  // window.location.pathname = `/${user.name}`
  // console.log(window.location.pathname)

  // console.log(user)
  let color = "green"
  let word = 'aktiv'
  const Cards = GeneralData.map((el, ind) => {
    if((new Date(el.finishdate)).getTime()>=NowDate){
      color = "green"
      word = 'aktiv'
    }
    else{
      word = 'bitib'
      color = "red";
      
      
    }
    return (
      <div class="col">
        {/* <button  className="detail">
          Ətraflı
        </button> */}
        <div class="card h-100">
          <img src={el.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              {el.name}:{el.salary}
            </h5>
            <p class="card-text">{el.description}</p>
          </div>
          <div  class="card-footer">
            <small   class="text-muted">bitmə vaxtı - <span style={{color:color}}>{el.finishdate}</span>-{word}</small>
          </div>
        </div>
      </div>
    );
  });
  let IsData = true;
  if(GeneralData.length === 0){
    IsData = false
  }
  return (
    <div>
      <Header ApplyForUser={ApplyForUser} userpage={id} />
      <SvgForhome />
      {/* <HomePageAnim /> */}
      <Footer />

      {/* <div class="row rw row-cols-1 row-cols-md-3 g-4">
        {IsData && Cards}
        {!IsData && <h1 style={{width:"100%",textAlign:"center"}}>Sizin əlavə etdiyiniz bir iş yoxdur</h1>}
      </div>

      {id} */}
    </div>
  );
}
