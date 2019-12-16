import React from "react";
import PhotoGallery from "../../components/UI/PhotoGallery";
import Navbar from "../../components/UI/NavBar";
import Banner from "../../components/UI/Banner";
import ContactForm from "../../components/ContactForm";
import { photos } from "../photos";
import homeImage from "../../assets/home.jpg";

import Footer from "../../components/Footer";
import "./style.css";
export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

class Home extends React.Component {
  parallax;
  myRef;
  state = {
    navbarOpen: false
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <div ref={this.myRef} id="home">
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          >
            <a href="/#home">Home</a>
            <a href="/#gallery"></a>
            {/* <a href="/#services">Our Services</a> */}
          </Navbar>

          <Banner
            className="bannerBg"
            style={{
              height: "100vh"
            }}
            layers={[
              {
                image: homeImage,
                amount: 0.3
              }
            ]}
          >
            <div className="image banner-content">
              <h1 className="heading">Professional Drone Services </h1>
              <h5 className="sub-heading">
                Simple and creative aerial photography
              </h5>
              <p>
                {/* <button className="btn btn-large">
                  {" "}
                  <a href="/#gallery">See More</a>
                </button> */}
              </p>
            </div>
          </Banner>

          {/* <div className="about">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div id="gallery">
              <PhotoGallery photos={photos}></PhotoGallery>
            </div>
             <ContactForm></ContactForm> 
           
          </div> */}
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Home;
