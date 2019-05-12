import React, { Component } from "react";
import Header from '../components/Header';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  render() {
    return( <div> <Header title="Roopa Decor" >
     <Link to="Events" className="text-uppercase btn btn-secondary btn-lg mt-3">
       Click me to view Events
     </Link>
    </Header>
    </div>
    )
  }
}
