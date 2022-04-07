import React, { Component } from 'react';
import {Route ,Switch,BrowserRouter} from 'react-router-dom';
import Image_gallary from './components/imageGallery/Home';
import NavBar from './components/imageGallery/NavBar';
import Footer from './components/imageGallery/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './content/styles/main.scss';

class App extends Component {
  render() {
    
    return (
     
      <React.Fragment>
        <NavBar/>
      <BrowserRouter>
      <Switch>
      <Route path ="/" component={Image_gallary}/>
             </Switch>
             <Footer/>
     </BrowserRouter>
    
        </React.Fragment>
    );
  }
}

export default App;