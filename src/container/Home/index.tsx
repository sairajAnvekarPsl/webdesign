import React from "react";
import PhotoGallery from "../../components/UI/PhotoGallery";
import Navbar from "../../components/UI/NavBar";
import Banner from "../../components/UI/Banner";
import ContactForm from "../../components/ContactForm";
import { photos } from "../photos";

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
            <a href="/#gallery">Gallery</a>
          </Navbar>
          <Banner
            className="bannerBg"
            layers={[
              {
                amount: 1,
                children: (
                  <video
                    className="video"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    muted
                    poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea.jpg"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea-720.mp4"
                  />
                )
              }
            ]}
            style={{
              height: "750px"
            }}
          >
            <div className="image">
              <h1 className="heading">Welcome to Aero Craft </h1>
              <p>
                <button className="btn btn-large"> <a href="/#gallery">Gallery</a></button>
              </p>
            </div>
          </Banner>

          <div className="about">
            <div id="gallery">
              <PhotoGallery photos={photos}></PhotoGallery>
            </div>
            {/* <ContactForm></ContactForm> */}
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
