import React, { Component } from 'react';
import {client} from "../data/contentful";
import EventList from '../components/EventList';

export default class Events extends Component {
constructor(props){
    super(props);
    this.setProducts = this.setProducts.bind(this);
    this.state = {
        storeProducts:[],
        events:[]
    };
}

async componentDidMount() {
    client
    .getEntries({ content_type: "tedla" })
    .then(response => this.setProducts(response.items))
    .catch(console.error);
}

setProducts = (products) => {
    let events = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image_url.fields.file.url;
      const images = item.fields.eventImages.map(itemImage => { 
        return itemImage.fields.file.url;
      });  
      const product = { id, ...item.fields, image, images };
      return product;
    });

    this.setState(
      {
        events
       }) ;
  };
  
    render() {
    return (
      <div>
        <EventList events= {this.state.events} />
      </div>
    )
  }
}
