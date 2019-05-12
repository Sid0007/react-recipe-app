import React, { Component } from "react";
import { client } from "../data/contentful";
import EventImage from "../components/EventImage";
import {Link} from "react-router-dom";
export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      events: [],
      id,
      event: "",
      images: []
    };
  }

  async componentDidMount() {
    client
      .getEntries({ content_type: "tedla" })
      .then(response => this.setProducts(response.items))
      .catch(console.error);
  }

  setProducts = products => {
    let events = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image_url.fields.file.url;
      let images = item.fields.eventImages.map(itemImage => {
        return itemImage.fields.file.url;
      });
      const product = { id, ...item.fields, image, images };
      return product;
    });

    const event = events.filter(item  => item.id === this.state.id)[0];
    const imageData = event.images.concat([]);
    this.setState({
      event,
      images: imageData
    });
  };

  render() {
    const {
      title,
      f2f_url,
      image,
      id,
      publisher,
      images,
      eventImages,
      eventDescription
    } = this.state.event;
    console.log(this.state.event);
    let imageList = this.state.images;
    let imageGallary = imageList.map((simage, index) => (
      <li key={index} style={{ padding: "0.5rem", listStyleType: "none" }}>
        {" "}
        <img
          src={simage}
          className="d-block w-100"
          style={{ maxHeight: "30rem" }}
          alt="Roopa Event Decor"
        />{" "}
      </li>
    ));

    return (

        <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/events"
              className="btn btn-warning mb-5 text-capatilize"
            >
              back to recipes list
            </Link>
            <img
              src={image}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt="recipe"
            />
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              {publisher}
            </h6>
            <a
              href={f2f_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              Event Site
            </a>
           
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Description</h2>
              {eventDescription}
             
            </ul>
          </div>
        </div>
     
    
        <div className="container my-5">
          <div className="row">
            <div className="table">
            <h2>More Images from the Event</h2>
              <ul className="horizontal-list">{imageGallary}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
