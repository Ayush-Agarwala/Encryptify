
import axios from "axios";
import { useState } from "react";
import './SenderPage.css'; 

function SenderPage() {
  const [message, setMessage] = useState('');
  const [firstint, setFirstInt] = useState('');
  const [secondint, setSecondInt] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const handleSend = () => {
    axios.post('http://localhost:5000/send', {
      message,
      firstint,
      secondint,
    })
    .then(response => {
        setReceivedMessage(response.data.message);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="sender-container">
      <h2>Sender Frontend</h2>
      <textarea
        className="input-text"
        placeholder="Enter text to Encrypt"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <label className="label-input">
        First Integer:
        <input
          type="number"
          className="input-field"
          value={firstint}
          onChange={(e) => setFirstInt(e.target.value)}
        />
      </label>
      <br />
      <label className="label-input">
        Second Integer:
        <input
          type="text"
          className="input-field"
          value={secondint}
          onChange={(e) => setSecondInt(e.target.value)}
        />
      </label>
      
      <br />
      <button className="send-button" onClick={handleSend}>Send Message</button>
      <br />
      <div className="result-container">
        <strong>Encrypted Message:</strong> {receivedMessage}
      </div>
    </div>
  );
}

export default SenderPage;
