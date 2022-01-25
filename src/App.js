import React, { useState } from "react";
import Modal from "./lib/Modal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show}>
        <p>Your content !</p>
      </Modal>
    </div>
  );
}
