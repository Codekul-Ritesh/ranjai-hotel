import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div>


      <div className="main-layout">
        {/* <!-- loader  --> */}
        {/* <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div> */}
        {/* <!-- end loader -->
      <!-- header --> */}
        <Header/>
        {/* <!-- end header inner -->
      <!-- end header -->
      <!-- banner --> */}
        <section className="banner_main">
          <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="first-slide" src="images/banner11.jpeg" alt="First slide" />
                <div className="container">
                </div>
              </div>
              <div className="carousel-item">
                <img className="second-slide" src="images/banner22.jpeg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="third-slide" src="images/banner33.jpeg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          
        </section>
        {/* <!-- end banner -->
      <!-- about --> */}
        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="titlepage">
                  <h2>About Us</h2>
                  <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
                  <a className="read_more" href="Javascript:void(0)"> Read More</a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img">
                  <figure><img src="images/about.jpeg" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end about -->

      <!-- gallery --> */}
        <div className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>gallery</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary1.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary2.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary3.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary4.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner11.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner22.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner33.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/about.jpeg" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end gallery -->
      <!-- blog --> */}
        <div className="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h1>रानजाई</h1>
                  <h1 style={{color:'white'}}>फॅमिली गार्डन ॲण्ड रिसॉर्ट </h1>
                  <h3 style={{color:'whitesmoke'}}>चुलीवरची अस्सल गावराण चव</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/blog1.jpeg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Food</h3>
                    <span>चुलीवरची अस्सल गावराण चव </span>
                    <p>It was a very satisfying meal. </p>
                    <p>That was a delicious meal.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/room6.jpg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Bed Room</h3>
                    <span>Perfect for one-day-night stay!</span>
                    <p>A couple-friendly property (couples who are unmarried and/or have local IDs are welcome)  </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/parking.jpeg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Parking</h3>
                    <span>Smooth parking experience for smoother journey ahead.</span>
                    {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end blog -->
      <!--  contact --> */}
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <input className="contactus" placeholder="Name" type="type" name="Name" />
                    </div>
                    <div className="col-md-12">
                      <input className="contactus" placeholder="Email" type="type" name="Email" />
                    </div>
                    <div className="col-md-12">
                      <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                    </div>
                    <div className="col-md-12">
                      <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style={{border:'0px', width:'100%'}} allowfullscreen=""></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end contact -->
      <!--  footer --> */}
                {/* <!-- end footer --> */}
<Footer/>
      </div>

    </div>
  );
}

export default App;
