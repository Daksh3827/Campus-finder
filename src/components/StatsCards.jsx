function StatsCards({ seats, bookings }) {
  const totalSeats = seats.length;

  const availableSeats = seats.filter(
    (seat) => seat.status === "available"
  ).length;

  const occupiedSeats = seats.filter(
    (seat) => seat.status === "occupied"
  ).length;

  const reservedSeats = seats.filter(
    (seat) => seat.status === "reserved"
  ).length;

  const today = new Date().toISOString().split("T")[0];

  const todayBookings = bookings.filter(
    (booking) => booking.date === today && booking.status === "active"
  ).length;

  const cards = [
    { title: "Total Seats", value: totalSeats, icon: "All", color: "blue" },
    { title: "Available", value: availableSeats, icon: "Avl", color: "green" },
    { title: "Occupied", value: occupiedSeats, icon: "Occ", color: "red" },
    { title: "Reserved", value: reservedSeats, icon: "Res", color: "purple" },
    { title: "Today's Bookings", value: todayBookings, icon: " B", color: "orange" }
  ];

  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div className="stat-card" key={card.title}>
          <div className={`stat-icon ${card.color}`}>
            {card.icon}
          </div>

          <div>
            <p>{card.title}</p>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
