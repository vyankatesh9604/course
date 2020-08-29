import React, { useState } from 'react';


const Contact = () => {
  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    message:'',
  })

  const InputEvent = (event) =>{
    const {name,value} = event.target;

    setData((preVal)=> {
      return {
        ...preVal,
        [name] : value,
      }
    })
  }
  const formSubmit =(e)=>{
    e.preventDefault()
    alert(`MY Name is ${data.fullname},My mobile number is ${data.phone} and email is ${data.email} ,Here is what I want to say ${data.message} `)
  }
  return (
    <>
        <div className="my-5">  
          <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact-div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-lebel">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required=' '/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-lebel">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" required=' '/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-lebel">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required=' '/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-lebel">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name="message" value={data.message} onChange={InputEvent}></textarea>
              </div>
              <div className="col-14">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
    </>
  );
}

export default Contact;
