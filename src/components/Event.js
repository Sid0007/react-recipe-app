import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class Event extends Component {
  render() {
    const { title, image, id, publisher } = this.props.event;
    return (
        <>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
           <div className="card" style={{height:'100%'}}>
           <img src={image}  style={{height:'14rem'}} className="img-card-top"
            alt ="recipe" />
            <div className="card-body text-capitalize">
             <h6>{title}</h6>
             <h6 className="text-warning text-slanted"> {publisher} </h6>
            </div>
            <div className="card-footer">
              <Link to={`/events/${id}`} className="btn btn-primary text-capitalize">
              Details
              </Link>
             <Link to="/" />
            
            </div>
           </div>
   
          </div>
        </>
   
   
      ); 
  }
}
