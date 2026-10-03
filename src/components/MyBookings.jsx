
function MyBookings({ bookings, onCancel }) {
  const activeBookings = bookings.filter(
    (booking) => booking.status === "active"
  );

  return (
    <div className="section-card">
      <div className="section-heading">
        <div>
          <h3>My Bookings</h3>
          <p>View and manage active seat bookings</p>
        </div>
      </div>

      <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Seat ID</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {activeBookings.map((booking) => (
                <tr key={booking.id}>
                  <td><strong>{booking.seatId}</strong></td>
                  <td>{booking.studentName}</td>
                  <td>{booking.rollNo}</td>
                  <td>
                    <span className="status-badge reserved">Active</span>
                  </td>
                  <td>
                    <button
                      className="cancel-btn"
                      onClick={() => onCancel(booking)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default MyBookings;
