
import BookingForm from "./BookingForm";

function SeatDetails({ seat, onClose, onBook }) {
  if (!seat) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="details-panel" onClick={(e) => e.stopPropagation()}>
        <div className="details-heading">
          <div>
            <h3>Seat Details</h3>
            <p>View seat information</p>
          </div>
        </div>

        <div className="seat-detail-box">
          <h2>{seat.seatId}</h2>
          <span className={`status-badge ${seat.status}`}>
            {seat.status}   
          </span>
        </div>

        <div className="detail-row">
          <span>Seat ID</span>
          <strong>{seat.seatId}</strong>
        </div>

        {seat.status === "available" ? (
          <BookingForm
            seat={seat}
            onBook={onBook}
            onCancel={onClose}
          />
        ) : (
          <p className="not-available">
            This seat is {seat.status}. You cannot book it right now.
          </p>
        )}
      </div>
    </div>
  );
}

export default SeatDetails;
