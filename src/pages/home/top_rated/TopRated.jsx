import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';
function TopRated() {
    const [endPoint, setEndPoint] = useState("movie");

 const { data, loading} =useFetch(`/${endPoint}/top_rated`)
 console.log("popular" , data);
    const onTabChange =(tab)=>{
        setEndPoint(tab === "movie" ? "movie" : "tv")
    }
  return (
    <div className='carouselSection'>
    <ContentWrapper>
    <span className="carouselTitle">Top rated</span>
    <SwitchTabs data={["movies","tv shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default TopRated