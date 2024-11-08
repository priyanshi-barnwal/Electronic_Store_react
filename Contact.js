import React from 'react'

export default function Contact() {
  return (
    <div className="container" id="contact">
        <div className="row" style={{marginTop : "50px"}}>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <i className="fas fa-phone"> Phone</i>
                    <h6>+919835129004</h6>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <i className="fas fa-envelope"> Email</i>
                    <h6>vedanshraj903@gmail.com</h6>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <i className="fas fa-location-dot"> Address</i>
                    <h6>Vaishali market, chas, Bokaro, jharkhand, India</h6>
                </div>
            </div>
        </div>

        <form action="/submit-enquiry" method="POST" >
        <div className="row" style={{marginTop : "30px"}}>
            <div className="col-md-4 py-3 py-md-0">
                <input type="text" name="name" className="form-control form-control" placeholder="enter your name" />
            </div>
            <div className="col-md-4 py-3 py-md-0">
              
            <select name="machine" className="form-control form-control">
                <option>Select Electronic Gadgets to enquire</option>
                <option value="Fridge">Fridge</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Air conditioner">Air conditioner</option>
                <option value="Air coolers">Air coolers</option>
                <option value="Home Theatre">Home Theatre</option>
                <option value="Inverter-Battery">Inverter-Battery</option>
                <option value="Microwave oven">Microwave oven</option>
                <option value="Laptops">Laptops</option>
                <option value="Smart Phones">Smart Phones</option>
                <option value="Kitchen Appliances">Kitchen Appliances</option>
                <option value="Printers">Printer</option>
                <option value="Soundbars">Soundbars</option>
                <option value="Music System">Music System</option>
                <option value="Water Purifier">Water Purifier</option>
                <option value="Smart TV">Smart TV</option>
                <option value="Geyser">Geyser</option>
            </select>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <input type="text" name="phone" className="form-control form-control" placeholder="enter your phone number"/>
            </div>
            <div className="form-group" style={{marginTop : "30px"}}>
                <textarea name="message" className="form-control" id="" rows="5" placeholder="enter your enquiry, we will get in touch with you. "></textarea>
            </div>
            <div className="messagebtn text-center"><button type="submit" value="submit">Message</button></div>
          </div>
      </form>
    </div>
  )
}
