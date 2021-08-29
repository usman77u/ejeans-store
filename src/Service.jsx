import React from 'react';
//import { NavLink } from 'react-router-dom';
//import jeans from '../src/images/jeans.jpg';
import Card from './Card';
import Sdata from './Sdata';
const Service = () =>{
    return(
        <>
       <div className="my-4">
           <h1 className="text-center">Our Services</h1>
       </div>
       <div className="container-fluid mb-5 ">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                      {
                      Sdata.map((val,i)=>{
                          return <Card
                          key={i}
                          imgsrc={val.imgsrc}
                          title={val.title}
                          des={val.des}
                          btname={val.btnname}/>

                      }
                      )
                      }

                    </div>
                </div>
            </div>
        </div>
        </>

    );
};
export default Service;