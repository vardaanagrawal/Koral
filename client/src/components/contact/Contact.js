import React,{useState} from "react";
import "./contact.css";
import axios from 'axios';

export default function Contact() {

  const [item,setItem] = useState('');
  
  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleSelect(event) {
    const service = event.target.value;
    setItem((prevInput) => {
      return {
        ...prevInput,
        service: service
      };
    });
  }

  function sendMessage(event) {
    event.preventDefault();
    if(!item.name || !item.email){
      alert('Please enter required details');
    }
    else{
      axios.post(`/addItem`, item)
      .then((res) => {alert(res.data)});
    }
  }

  return (
    <div className="contact">
      <div className="partners">
        <img src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/04/logo4.png"></img>
        <img src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/04/logo3.png"></img>
        <img src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/04/logo2.png"></img>
        <img src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/04/logo7.png"></img>
  </div>
      <div className="quote">
        <div style={{fontSize: '18px', color: '#fa7268', textAlign: 'center'}}>We have clients all over the world</div>
        <div style={{fontSize: '40px', textAlign: 'center', fontWeight: '700'}}>Request a Quote Today!</div>
      </div>
      <div className="form">
          <form>
              <label id="l1">Your Name (required)</label>
              <input id="i1" name="name" onChange={handleChange}></input>
              <label id="l2">Your Email (required)</label>
              <input id="i2" name="email" onChange={handleChange}></input>
              <label id="l3">Subject</label>
              <input id="i3" name="subject" onChange={handleChange}></input>
              <label id="l4">Service Desired</label>
              <select id="i4" name="service" onChange={handleSelect}>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Web APS</option>
                  <option>Graphic</option>
                  <option>Support</option>
              </select>
              <label id="l5">Your Message</label>
              <textarea id="i5" name="message" onChange={handleChange}></textarea>
              <button id="b1" onClick={sendMessage}>SEND EMAIL</button>
          </form>
      </div>
    </div>
  );
}
