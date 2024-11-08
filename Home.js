import React from 'react';
import Banner from './Banner';

export default function Home() {
  return (
    <>
      {/* Home content */}
      <section className="home">
        <div className="content">
          <h1>
            <span>Electronic Products</span>
            <br />
            Up To <span id="span2">15%</span> Off
          </h1>
          <p>
            Discover New Music Corner premier electronic machines
            <br /> portable and cart-based systems. Engineered with advanced technology, our products ensure unparalleled
            precision and reliability for daily needs imaging needs.
          </p>
          <div className="btn">
            <button>
              <a href="#product-cards" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Now</a>
            </button>
          </div>
        </div>
        <div className="img">
          <img
            src="https://i.pinimg.com/originals/37/75/11/377511a14c4316c3a859ad46bf530964.png"
            alt="Electronic Products"
          />
        </div>
      </section>

      {/* Product cards */}
      <div className="container" id="product-cards">
        <h1 className="text-center">PRODUCTS</h1>
        <div className="row" style={{ marginTop: '30px' }}>
          {/* Card 1 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/ac2.jpeg" alt="Air Conditioner" />
              <div className="card-body">
                <h3 className="text-center">Air Conditioner</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 45,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/cooler.jpeg" alt="Air Cooler" height="265px" width="350px" />
              <div className="card-body">
                <h3 className="text-center">Symphony Air Cooler</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 5,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/water-purifier.png" alt="Water Purifier" height="265px" width="350px"  />
              <div className="card-body">
                <h3 className="text-center">Water Purifier</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 8,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/luminous-microtek.webp" alt="Inverter Battery" height="265px" width="350px" />
              <div className="card-body">
                <h3 className="text-center">Inverter Battery</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 14,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
        </div>

        {/* Next row of products */}
        <div className="row" style={{ marginTop: '30px' }}>
          {/* Card 5 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/geyser.jpg" alt="Geyser" height="265px" width="350px"/>
              <div className="card-body">
                <h3 className="text-center">Geyser</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 5,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/mixer grinder.avif" alt="Mixer Grinder" height="265px" width="350px"/>
              <div className="card-body">
                <h3 className="text-center">Mixer Grinder</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 1,500<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/led tv.jpg" alt="LED TV" height="265px" width="350px" />
              <div className="card-body">
                <h3 className="text-center">LED TV</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 8,000<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src="images/fan.jpeg" alt="Fan" height="265px" width="350px"/>
              <div className="card-body">
                <h3 className="text-center">Fan</h3>
                <div className="star text-center">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <h2>₹ 1,200<span><a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a></span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      {/* <div class="container" id="product-cards"> */}

    <div class="row" style={{marginTop: "30px"}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/fridge1.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Fridge</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 25,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/phone.png" alt="" height="350px" width="750px"/>
          <div class="card-body">
            <h3 class="text-center">Smart Phones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 4,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/earphone.png" alt="" height="350px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">Earphones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 500 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/pr3.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Microwave </h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 17,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
    </div>
   
    <div class="row" style={{marginTop: "30px"}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/c1.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Laptops</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 27,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/pr7.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">CPU</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 10,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/pr9.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Smart Watch</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 800 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/p6.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Iphones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2  >₹ 65,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
