import React, { Component } from "react";
/* import { recipeData } from "../data/tempDetails"; */
import { Link } from "react-router-dom";
import { client } from "../data/contentful";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {}, // recipeData,
      id,
      loading: true,
      storeProducts:[],
      products:[]
    };
  }

  async componentDidMount() {
    client
      .getEntries({ content_type: "tedla" })
      .then(response => this.setProducts(response.items))
      .catch(console.error);

     

    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_API_KEY
    }&rId=${this.state.id}`;

    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        recipe: responseData.recipe,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image_url.fields.file.url;
      const images = item.fields.eventImages.map(itemImage => { 
        return itemImage.fields.file.url;
      });  
      const product = { id, ...item.fields, image, images };
      return product;
    });

    console.log(storeProducts[0]);

    this.setState(
      {
        storeProducts
       },
     () => console.log(this.state.storeProducts)) ;
  };
  

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/recipes"
              className="btn btn-warning mb-5 text-capatilize"
            >
              back to recipes list
            </Link>
            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt="recipe"
            />
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
