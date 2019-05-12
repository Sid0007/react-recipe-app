import React, { Component } from "react";
import Event from "./Event";
export default class EventList extends Component {
  render() {
    const { events } = this.props;


    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Event list</h1>
            </div>
          </div>

          <div className="row">
          {events.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
