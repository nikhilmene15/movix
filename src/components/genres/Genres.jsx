import React from 'react'
import "./style.scss"
import {  useSelector } from 'react-redux'
function Genres({data}) {

    const {generes} = useSelector((state)=>state.home);
  return (
    <div className="genres">
            {data?.map((g) => {
                if (!generes[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {generes[g]?.name}
                    </div>
                );
            })}
        </div>
  )
}

export default Genres