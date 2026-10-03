
import { useState } from "react";

function BookingForm({ seat, onBook, onCancel }) {
  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentName.trim() === "" || rollNo.trim() === "") {
      alert("Please fill in all the details.");
      return;
    }

    onBook({
      studentName: studentName.trim(),
      rollNo: rollNo.trim()
    });

    setStudentName("");
    setRollNo("");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h4>Book This Seat</h4>

      <label>Student Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />

      <label>Roll Number</label>
      <input
        type="number"
        placeholder="Enter your roll number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
      />

      <div className="form-buttons">
        <button type="submit" className="book-btn">
          Confirm Booking
        </button>

      </div>
    </form>
  );
}

export default BookingForm;
