import { useEffect, useState } from 'react';
import './App.css';
import './App-m.css';
import Confirmation from './Confirmation';

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isConfirmed, setIsConfirmed] =useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkWidth = () => {
      console.log(window.innerWidth);
      if(window.innerWidth < 375){
        console.log("lower");
      }
    }

    checkWidth();
  });

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit() {
    
    let isValidEmail = validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
    } else {
      setEmail("");
      setIsConfirmed(true);
    }
  }

  function handleChange(e) {
    
    if (e.target.value < 1) {
      setIsValid(true);
    } else {
      setEmail(e.target.value);
    }
  }

  return (

    <div className="primary">
      <div className="main-container">
        <div className="left-side-container">
          <div className="main-left-container">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <div className="points">
              <div className="point">
                <img src="/images/icon-list.svg" alt="" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="point">
                <img src="/images/icon-list.svg" alt="" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="point">
                <img src="/images/icon-list.svg" alt="" />
                <p>And much more!</p>
              </div>

              <div className="email">
                <div className="top-email">
                  <p className='email-text'>Email Address</p>
                  <p style={{ display: !isValid && email.length > 0 ? "block" : "none" }} className='error-text'>Valid email required</p>
                </div>

                <input style={{
                  border: !isValid ? "2px solid hsl(4, 100%, 67%)" : "hsl(234, 29%, 20%) 1px solid",
                  backgroundColor: !isValid ? "hsla(4, 100%, 67%, 0.212)" : "white",
                  color: !isValid ? "hsl(4, 100%, 67%)" : "black"
                }} onChange={handleChange} type="text" name="email" id="email" placeholder='email@company.com' />
                <button onClick={handleSubmit} className='subscribe'>Subscribe to monthly newsletter</button>
              </div>
            </div>
          </div>



        </div>
        <div className="right-side-container">
          <img src="/images/illustration-sign-up-desktop.svg" alt=""/>
        </div>

        
      </div>
      {(isConfirmed) ? <Confirmation setIsConfirmed={setIsConfirmed}/> : ""}
    </div>

  );
}

export default App
