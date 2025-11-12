import React from 'react'
import { FaTimes} from "react-icons/fa";
const Modal = ({handleClick}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="cross">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick} />
        </div>
        <h2>Know More About Our Ticket Booking System</h2>
      </div>
    </div>
  );
}

export default Modal
