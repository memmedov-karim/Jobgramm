import React from "react";
import "./userpagejobs.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {  useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { UpdateJobs } from "../../Redux/Reducers/UserAddJobReducers";
import axios from "axios";
export default function Userpagejobs() {
  const dispatch = useDispatch();
  const [Data,SetData] = React.useState("Iş yoxdur");
  const AllApplys = useSelector((state) => state.apply.UserApplyData);
  
    const AllJobs  = useSelector(state=>state.jb.JobsData);
    // console.log(useParams())
    // console.log(window.location.pathname.split('/'))
    const data = [];
  for (let i = 0; i < 16; i++) {
    data.push(i);
  }
  const [NowDate,setNowDate] = React.useState((new Date()).getTime());
  let color = "green"
  let word = 'aktiv';
  const Cards = AllJobs.map((el, ind) => {
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
        
        dispatch(UpdateJobs(ReturnedData))
      },10000)
      
      
    }
    return (
        <div class="col">
          {/* <button className="detail">Ətraflı</button> */}
          <div class="card h-100">
            <img
              src={el.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{el.name}:{el.salary}</h5>
              <p class="card-text">
                {el.description}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">bitmə vaxtı  -  <span style={{color:color}}>{el.finishdate}</span>-{word}</small>
            </div>
          </div>
        </div>
    );
  });
  const [id,setId] = React.useState(useParams().id);
  const ApplyForUser = [];
  for (let obj of AllApplys) {
    if (obj.id === id) {
      ApplyForUser.push(obj);
    }
  }
  return (
    <div className="alljobs">
      <Header ApplyForUser={ApplyForUser}  userpageid={useParams().id} />

      {AllJobs.length!==0? <div class="row rw row-cols-1 row-cols-md-3 g-4">
            {Cards}
        </div>:<div style={{textAlign:"center"}}><h1>{Data}</h1></div>}
      <Footer />
    </div>
  )
}
