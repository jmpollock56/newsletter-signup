import React from "react";
import "./Confirmation.css";
import "./Confirmation-m.css";

export default function Confirmation({ setIsConfirmed }){
  return(
    <div className="pop-up-background">
      <div className="pop-up">
        <div className="pop-up-main">
          <img src="/images/icon-success.svg" alt="success" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation has been sent to <b>ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button onClick={() => {setIsConfirmed(false)}}>Dismiss message</button>
        </div>
      </div>
    </div>
  );
}