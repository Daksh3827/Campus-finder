
import SeatCard from "./SeatCard";

function SeatGrid({ seats, filter, onSelectSeat }) {

  const filteredSeats =
    filter === "all" ? seats : seats.filter((seat) => seat.status === filter);

  return (
    <div className="section-card">
      <div className="section-heading">
        <div>
          <h3>Seat Layout</h3>
          <p>Select a seat to see its details</p>
        </div>
      </div>
        <div className="seat-grid">
          {filteredSeats.map((seat) => (
            <SeatCard
              key={seat.id}
              seat={seat}
              onClick={onSelectSeat}
            />
          ))}
        </div>
    </div>
  );
}

export default SeatGrid;
