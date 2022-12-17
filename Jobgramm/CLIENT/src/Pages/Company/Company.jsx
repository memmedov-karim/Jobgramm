import React from "react";
import "./company.css";
import Header from "../../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import {FaCrown} from 'react-icons/fa'
export default function Company() {
  const CompaniesData = useSelector((state) => state.dt.UsersData);
  const AllJobs = useSelector((state) => state.jb.JobsData);
  const CountOfWorksEachCompany = (id) => {
    let count = 0;
    for (let obj of AllJobs) {
      if (obj.id === id) {
        count += 1;
      }
    }
    return count;
  };
  const WorksNumberAllCompany = [];
  for (let i of CompaniesData) {
    WorksNumberAllCompany.push(CountOfWorksEachCompany(i._id))
    // console.log(CountOfWorksEachCompany(i._id));
  }
  WorksNumberAllCompany.sort((a,b)=>a-b).reverse()
  const dr = [...CompaniesData].sort((a,b)=>CountOfWorksEachCompany(a._id)-CountOfWorksEachCompany(b._id)).reverse()
  console.log(WorksNumberAllCompany[0])
  const UlElementsOfCompany = dr.map((val, ind) => {
    return (
        <div key={ind} className="accordion-item">
        <h2 className="accordion-header" id={`heading${ind}`}>
          <button
          style={{color:"black"}}
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${ind}`}
            aria-expanded="true"
            aria-controls={`collapse${ind}`}
          >
            <div className="general">

            <div className="index_name">
            {ind+1}{`.`}
            {val.name}

            </div>
            <div className="crown">

            {CountOfWorksEachCompany(val._id)===WorksNumberAllCompany[0]?<FaCrown style={{color:"red"}} />:``}

            </div>

            </div>
           
            
            
          </button>
        </h2>
        <div
          id={`collapse${ind}`}
          className="accordion-collapse collapse hide"
          aria-labelledby={`heading${ind}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Elan sayı:</strong> 
            {CountOfWorksEachCompany(val._id)}
          </div>
        </div>
      </div>
    );
  });

  // console.log(CompaniesData,AllJobs)
  return (
    <div className="company_container">
      <Header/>
      <div className="accordion" id="accordionExample">
        {UlElementsOfCompany}
      </div>
      {/* <Link to='/alljobs'>Geri</Link> */}
      {/* <ol>
            {UlElementsOfCompany}

        </ol> */}
    </div>
  );
}
