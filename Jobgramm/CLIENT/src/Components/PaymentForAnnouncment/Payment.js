import React from "react";
import "./payment.css";
import { Link } from "react-router-dom";
export default function Payment() {
    const [PaymentDetail,setPaymentDetail] = React.useState({
        amount:0,
        card_number:"",
        expired_date:"",
        cvv_code:"",
        name:""


    });
    const {amount,card_number,expired_date,cvv_code,name} = PaymentDetail
    const IsEmpty = (amount!==0 && card_number!=="" && expired_date!=="" && cvv_code!=="" && name!=="")?true:false
    console.log(IsEmpty)
    const GetPaymentDetail = (e) => {
        const {name,value} = e.target;
        setPaymentDetail({
            ...PaymentDetail,
            [name]:value
        })
    }
    const SendPayment = (e) => {
        e.preventDefault()
        console.log(PaymentDetail)
    }
  return (
    <div className="container bg-light d-md-flex align-items-center">
      <div className="card box2 shadow-sm">
        {" "}
        <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
          {" "}
          <span className="h5 fw-bold m-0">Ödəniş növü</span>{" "}
          <div className="btn btn-primary bar">
            <span className="fas fa-bars"></span>
          </div>{" "}
        </div>{" "}
        <ul className="nav nav-tabs mb-3 px-md-4 px-2">
          {" "}
          <li className="nav-item">
            {" "}
            <Link className="nav-link px-2 active" aria-current="page" href="#">
              Kredit kartı
            </Link>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <Link className="nav-link px-2" href="#">
              Mobil ödəmə
            </Link>{" "}
          </li>{" "}
          <li className="nav-item ms-auto">
            {" "}
            <Link className="nav-link px-2" href="#">
              + Daha çox
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
        <form onSubmit={SendPayment} method="post" action="">
        <div className="px-md-5 px-4 mb-4 d-flex flex-column ">
        <span>Ödəniş məbləqi <strong>Azn</strong></span>{" "}
                <div className="inputWithIcon">
                  <input
                    className="form-control text-uppercase"
                    type="number"
                    name="amount"
                    value={PaymentDetail.amount}
                    onChange={GetPaymentDetail}
                    
                  />{" "}
                  <span className="far fa-user"></span>{" "}
                </div>{" "}
          
          
        </div>{" "}
        
          {" "}
          <div className="row">
            {" "}
            <div className="col-12">
              {" "}
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                {" "}
                <span>Kredit kartı</span>{" "}
                <div className="inputWithIcon">
                  {" "}
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="5136 1845 5468 3894"
                    name="card_number"
                    value={PaymentDetail.card_number}
                    onChange={GetPaymentDetail}
                  />{" "}
                  <span className="">
                    {" "}
                    <img
                      src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                      alt=""
                    />
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                {" "}
                <span>
                  Bitmə<span className="ps-1">Vaxtı</span>
                </span>{" "}
                <div className="inputWithIcon">
                  {" "}
                  <input type="text" className="form-control" defaultValue="05/20"
                  name="expired_date"
                  value={PaymentDetail.expired_date}
                  onChange={GetPaymentDetail}
                   />{" "}
                  <span className="fas fa-calendar-alt"></span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                {" "}
                <span>CVV Kodu</span>{" "}
                <div className="inputWithIcon">
                  {" "}
                  <input type="password" className="form-control" defaultValue="123"
                  name="cvv_code"
                  value={PaymentDetail.cvv_code}
                  onChange={GetPaymentDetail}
                   />
                  <span className="fas fa-lock"></span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-12">
              {" "}
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                {" "}
                <span>Ad</span>{" "}
                <div className="inputWithIcon">
                  <input
                    className="form-control text-uppercase"
                    type="text"
                    defaultValue="kerim memmedov"
                    name="name"
                    value={PaymentDetail.name}
                    onChange={GetPaymentDetail}
                    
                  />{" "}
                  <span className="far fa-user"></span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-12 px-md-5 px-4 mt-3">
              {" "}
              <input disabled={!IsEmpty} value={`ödə-${PaymentDetail.amount}Azn`} type="submit" className="btn btn-primary w-100"/>
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
}
