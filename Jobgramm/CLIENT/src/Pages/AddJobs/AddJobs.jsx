import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./addjobs.css";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { UpdateJobs } from "../../Redux/Reducers/UserAddJobReducers";
import { Modal } from "react-bootstrap";
export default function AddJobs() {
  const userid = useParams().id;
  const dispatch = useDispatch();
  const [editingid,seteditingid] =  React.useState("");
  const [defaultcategory,setDefaultCategory] = React.useState("");
  const [defaultname,setDefaultname] = React.useState("");
  const [defaultsalary,setDefaultsalary] = React.useState("");
  const [defaultworkinghours,setDefaultworkinghours] = React.useState("");
  const [defaultlocation,setDefaultlocation] = React.useState("");
  
  const [defaultworktype,setDefaultworktype] = React.useState("");
  const [defaultfinishdate,setDefaultfinishdate] = React.useState("");
  const [defaultimage,setDefaultimage] = React.useState("");
  const [defaultdescription,setDefaultdescription] = React.useState("");
  const AllJobs  = useSelector(state=>state.jb.JobsData);
  const DeleteJobs = (id) => {
    // console.log(AllJobs)
    const ReturnedData = AllJobs.filter((val)=>{
      return val._id !== id 
    })
    // console.log(ReturnedData)
    axios.delete(`http://localhost:3001/deletejobs/${id}`);
    dispatch(UpdateJobs(ReturnedData))
  }
  const EditJob = (id) =>{
    seteditingid(id)
    const job = AllJobs.find(obj=>obj._id === id);
    // console.log(job)
    setDefaultCategory(job.category);
    setDefaultname(job.name);
    setDefaultsalary(job.salary);
    setDefaultlocation(job.location);
    setDefaultworkinghours(job.workinghours);
    setDefaultworktype(job.worktype);
    setDefaultfinishdate(job.finishdate);
    setDefaultimage(job.image);
    setDefaultdescription(job.description);
    // console.log(defaultcategory,defaultname,defaultsalary,defaultlocation,defaultworkinghours,defaultworktype,defaultfinishdate,defaultimage,defaultdescription)
    
    // console.log(id,job)
    
    // setTimeout(()=>{
    //     window.location.reload()
    //   },300)
  }
  
  
  const MyJobs = [];
  for(let job of AllJobs){
    if(job.id === userid){
      MyJobs.push(job)

    }
  }
  console.log(MyJobs)
  const [Workslength,setWorkslength] = React.useState(0);
  React.useEffect(()=>{
    setWorkslength(MyJobs.length)
  },[])
  
  // console.log(MyJobs)
  const TrElements = MyJobs.map((job,ind)=>{
    return (
      <tr key={ind}>
                <td id="td">{ind+1}</td>
                <td id="td">{job.category}</td>
                <td id="td">{job.name}</td>
                <td id="td">{job.salary}</td>
                <td id="td">{job.workinghours}</td>
                <td id="td" className="edDelCont">
                    <button data-bs-target="#exampleModalUpdate"
          data-bs-toggle="modal" onClick={()=>EditJob(job._id)} className="editbutton" >Düzəliş</button>
                    <button onClick={()=>DeleteJobs(job._id)} className="deleteButton" >Sil</button>
                </td>  

            {/* <th scope="row">{ind+1}</th>
            <td>{job.category}</td>
            <td>{job.name}</td>
            <td>{job.salary}</td>
            <td>{job.workinghours}</td>
            <td>
              <button data-bs-target="#exampleModalUpdate"
          data-bs-toggle="modal" onClick={()=>EditJob(job._id)} className="btn btn-success">Düzəliş</button>
              <button onClick={()=>DeleteJobs(job._id)} className="btn btn-danger">Sil</button>
            </td> */}
          </tr>
    )
  })
  // console.log(AllJobs)
  const AllUserss = useSelector((state) => state.dt.UsersData);
  // const user = AllUserss.find((obj) => obj._id === userid);
  const [JobData,setJobData] = React.useState({
    company_name:AllUserss.length!==0? AllUserss.find(obj=>obj._id === userid).name:"none",
    category:"",
    name:"",
    salary:"",
    workinghours:"",
    location:"",
    worktype:"",
    finishdate:"",
    image:"",
    description:"",
    count_showing:0,
    count_apply:0,
    comments:[],
    id:`${useParams().id}`

  });
  const [JobDataUpdate,setJobDataUpdate] = React.useState({
    category:defaultcategory,
    name:defaultname,
    salary:defaultsalary,
    workinghours:defaultworkinghours,
    location:defaultlocation,
    worktype:defaultworktype,
    finishdate:defaultfinishdate,
    image:defaultimage,
    description:defaultdescription,
    id:`${useParams().id}`

  });
  const GetJobData = (e) => {
    const {name,value} = e.target;
    setJobData(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const SubmitJobData = (e) => {
    e.preventDefault();
    const ReturnedData =[...AllJobs,JobData]
    console.log(ReturnedData)
    dispatch(UpdateJobs(ReturnedData))

    axios.post('http://localhost:3001/addjob',JobData);
    // console.log(JobData)
    setShow(false);
  }
  const GetJobDataUpdate = (e) => {
    const {name,value} = e.target;
    setJobDataUpdate(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const [show,setShow] = React.useState(false);
  const [isPayed,setisPayed] = React.useState(false);
  React.useEffect(()=>{
    if(MyJobs.length<2){
      setisPayed(true)
    }
    else{
      setisPayed(false)
    }
  },[MyJobs.length])
  console.log(isPayed)
  const handleClose = (e) => {
    setShow(false)
  }
  const SubmitJobDataUpdate = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:3001/update/${editingid}`,JobDataUpdate);
    setTimeout(()=>{
      window.location.reload()
    },200)
    // console.log(JobData)
  }
  // console.log(useParams().id);
  return (
    <div id="addJobContainer" className="container">
      <h1 id="addJobmywork" className="mywork">Mənim İşlərim-{MyJobs.length}</h1>
      <div
        class="modal fade modal-lg"
        id="exampleModalUpdate"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Düzəliş Et
              </h1>
              <button
                
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form id="addJobFormad" className="formad">
                <div  className="left">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Kategorya:
                    </label>
                    <input
                      value={JobDataUpdate.category}
                      defaultValue={defaultcategory}
                      onChange={GetJobDataUpdate}
                      name='category'
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Ad:
                    </label>
                    <input
                      value={JobDataUpdate.name}
                      defaultValue={defaultname}
                      onChange={GetJobDataUpdate}
                      name="name"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Maaş:
                    </label>
                    <input
          
                      value={JobDataUpdate.salary}
                      defaultValue={defaultsalary}
                      onChange={GetJobDataUpdate}
                      name="salary"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      İş saatı:
                    </label>
                    <input
                      value={JobDataUpdate.workinghours}
                      defaultValue={defaultworkinghours}
                      onChange={GetJobDataUpdate}
                      name="workinghours"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Ünvan:
                    </label>
                    <input
                      value={JobDataUpdate.location}
                      defaultValue={defaultlocation}
                      onChange={GetJobDataUpdate}
                      name="location"
                      type="text"
                      class="form-control"
                      id="message-text"
                    />
                    
                  </div>
                  </div>
                  <div className="right">
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        İş forması:
                      </label>
                      <input
                        value={JobDataUpdate.worktype}
                        defaultValue={defaultworktype}
                        onChange={GetJobDataUpdate}
                        name="worktype"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Bitmə vaxtı:
                      </label>
                      <input
                        value={JobDataUpdate.finishdate}
                        defaultValue={defaultfinishdate}
                        onChange={GetJobDataUpdate}
                        name="finishdate"
                        type="date"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Şəkil:
                      </label>
                      <input
                        value={JobDataUpdate.image}
                        defaultValue={defaultimage}
                        onChange={GetJobDataUpdate}
                        name="image"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Açıqlama:
                      </label>
                      <textarea
                        value={JobDataUpdate.description}
                        defaultValue={defaultdescription}
                        onChange={GetJobDataUpdate}
                        name="description"
                        class="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Bağla
              </button>
              <button onClick={SubmitJobDataUpdate} data-bs-dismiss="modal" type="button" class="btn btn-primary">
                Düzəliş et
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="addJobButtons" className="buttons mb-2 center">
        <Link to={`/${useParams().id}`} id="addJobsBtn" className="btn btn-primary">
          Geri
        </Link>
        <button
          id="addJobsBtn"
          data-bs-target="#exampleModal"
          data-bs-toggle="modal"
          className="btn btn-success"
          onClick={()=>setShow(true)}
        >
          əlavə et
        </button>
      </div>
      {isPayed && 
      <div
        class="modal fade modal-lg"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Yeni İş
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div class="modal-body">
              <form id="addJobFormad" className="formad">
                <div id="addJobLeft" className="left">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Kategorya:
                    </label>
                    <input
                      value={JobData.category}
                      onChange={GetJobData}
                      name='category'
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Ad:
                    </label>
                    <input
                      value={JobData.name}
                      onChange={GetJobData}
                      name="name"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Maaş:
                    </label>
                    <input
                      value={JobData.salary}
                      onChange={GetJobData}
                      name="salary"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      İş saatı:
                    </label>
                    <input
                      value={JobData.workinghours}
                      onChange={GetJobData}
                      name="workinghours"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Ünvan:
                    </label>
                    <input
                      value={JobData.location}
                      onChange={GetJobData}
                      name="location"
                      type="text"
                      class="form-control"
                      id="message-text"
                    />
                    
                  </div>
                  </div>
                  <div id="addJobRight" className="right">
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        İş forması:
                      </label>
                      <input
                        value={JobData.worktype}
                        onChange={GetJobData}
                        name="worktype"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Bitmə vaxtı:
                      </label>
                      <input
                        value={JobData.finishdate}
                        onChange={GetJobData}
                        name="finishdate"
                        type="date"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Şəkil:
                      </label>
                      <input
                        value={JobData.image}
                        onChange={GetJobData}
                        name="image"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Açıqlama:
                      </label>
                      <textarea
                        value={JobData.description}
                        onChange={GetJobData}
                        name="description"
                        class="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Bağla
              </button>
              <button onClick={SubmitJobData} data-bs-dismiss="modal" type="button" class="btn btn-primary">
                Əlavə et
              </button>
            </div>
          </div>
        </div>
      </div>}
      {!isPayed && <Modal show={show} onHide={handleClose}>
            <Modal.Header>Ödəniş</Modal.Header>
            <Modal.Body>

              <h2>Zəhmət olmasa elan üçün ödəniş edin</h2>
              

            </Modal.Body>


            <Modal.Footer>
              <Link className="btn btn-success" to={`/${userid}/payment`}>Ödə</Link>
            </Modal.Footer>

          </Modal>}
      
      <table class="tableInside">
        
          <tr>
            <th id="th" scope="col">Nömrə</th>
            <th id="th" scope="col">Kategorya</th>
            <th id="th" scope="col">Ad</th>
            <th id="th" scope="col">Maaş</th>
            <th id="th" scope="col">İş saatı</th>
            <th id="th" scope="col">Güncəllə</th>
          </tr>
        
          {TrElements}
      </table>
      </div>
      
   
  );
}
