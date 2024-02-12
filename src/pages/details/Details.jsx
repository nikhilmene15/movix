import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
// import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
// import Similar from "./carousels/Similar";
// import Recommendation from "./carousels/Recommendation";
import BannerDetails from "./bannerDetails/BannerDetails";
import Cast from "./cast/Cast";
import Similar from "./carouselDetails/Similar";
import Recommendation from "./carouselDetails/Recommendation ";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  // console.log("videos" , data);
  const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  console.log("credits" , credits);



  return (
    <div>
    <BannerDetails videos = {data?.results?.[0]} crew={credits?.crew} />
    <Cast data={credits?.cast} loading={creditsLoading} />
    <VideoSection data ={data} loading = {loading} /> 
    <Similar mediaType ={mediaType} id={id}/>
    <Recommendation mediaType ={mediaType} id={id}/>
    </div>
  )
}

export default Details