import React, { useState } from 'react';

const Info = (props) =>{
  return (
  <>
  <div class="modal fade" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  id="exampleModal"  tabindex="-1"  >

                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                                        </div>
                                        <div class="modal-body">
                                          {props.discription}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
</>
  )
}
const Card = (props) => {
  
  const [visible ,setVisible] =useState(false)
  return (
    <>
                      <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                              <p className="card-text">
                                {props.dis}
                              </p>
                              <button  type = "button" onClick= {()=>setVisible(true)}  className="btn btn-primary"   
                               // data-target="exampleModel" data-toggle="modal" 
                              >
                                More Info
                              </button>
                              {
                              visible && <Info
                              title={props.title}
                              discription={props.discription}
                              ></Info>
                              }
                              {/* <div class="modal fade" id={"exampleModel"+ props.index } tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                     <div class="modal-dialog" role="document">
                                       <div class="modal-content">                                         
                          ,              <div class="modal-header">
                                           <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                                           
                                         </div>
                                         <div class="modal-body">
                                          {props.discription}
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                    */}
                       
                            </div>
                          </div>
                      </div>
          
    </>
  );
}

export default Card;
