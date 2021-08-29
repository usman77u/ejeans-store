import React, { useState } from 'react';
const Contact = () =>{
    const [data,setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",

    });
    const InputEvent =(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,

            };

        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My Name is:${data.fullname}.Phone Number is:${data.phone}.Email:${data.email}.
            Message:${data.message}`
        );

    };
    return(
        <>
        <div className="my-4">
            <h1 className="text-center">Contact Us</h1>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <form onSubmit={formSubmit}>
                <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Full Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" 
  name="phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Phone Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"> Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="message"
  value={data.message}
  onChange={InputEvent}
  ></textarea>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
  </form>

                </div>
            </div>
        </div>
        </>

    );
};
export default Contact;