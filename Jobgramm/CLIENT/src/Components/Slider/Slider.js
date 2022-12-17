import React from "react";
// import { RecentAddedWork } from "../../Data/DataForJobSlider";
import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from "react-redux/es/exports";
export default function Slider() {
    const AllJobs  = useSelector(state=>state.jb.JobsData);
    // const [WorkData,setWorkData] = React.useState(RecentAddedWork);
    const CarouselItem = AllJobs.map((data,index)=>{
        return (
            <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={data.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="h3">{data.name}</h3>
          <p className="p">{data.description}</p>
        </Carousel.Caption>
      </Carousel.Item>

        )
    })

  return (
    <Carousel className="carousel">
      {CarouselItem}
    </Carousel>
  );
}
