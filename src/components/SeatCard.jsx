
function SeatCard({ seat, onClick }) {
  return (
    <button
      className={`seat-card ${seat.status}`}
      onClick={() => onClick(seat)}
    >
      <strong>{seat.seatId}</strong>
      <small>{seat.status}</small>
    </button>
  );
}

export default SeatCard;
