import axios from "axios";
import { useState } from "react";
import './SenderPage.css'

function ReceiverPage() {
    const [message, setMessage] = useState('');
  const [firstint, setfirstint] = useState('');
  const [secondint, setsecondint] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const handleReceive = () => {
    axios.post('http://localhost:5000/receive', {
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
      <h2>Reicever Frontend</h2>
      <textarea
        className="input-text"
        placeholder="Enter Encrypted Text: "
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
          onChange={(e) => setfirstint(e.target.value)}
        />
      </label>
      <br />
      <label className="label-input">
        Second Integer:
        <input
          type="text"
          className="input-field"
          value={secondint}
          onChange={(e) => setsecondint(e.target.value)}
        />
      </label>
      
      <br />
      <button className="send-button" onClick={handleReceive}>Decrypt Message</button>
      <br />
      <div className="result-container">
        <strong>Message:</strong> {receivedMessage}
      </div>
    </div>
  );
}

export default ReceiverPage
