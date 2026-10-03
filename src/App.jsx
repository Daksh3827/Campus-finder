import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/slidebar";
import Header from "./components/Header";
import SeatGrid from "./components/SeatGrid";
import SeatDetails from "./components/SeatDetails";
import MyBookings from "./components/MyBookings";

const seatApi = "http://localhost:5000/seats";
const bookingApi = "http://localhost:5000/bookings";

function App() {
    const [seats, setSeats] = useState([]);
    const [bookings, setBookings] = useState([]);

    const [page, setPage] = useState("dashboard");
    const [filter, setFilter] = useState("all");
    const [selectedSeat, setSelectedSeat] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getData = async () => {
        try {
            setError("");

            const seatResponse = await axios.get(seatApi);
            const bookingResponse = await axios.get(bookingApi);

            setSeats(seatResponse.data);
            setBookings(bookingResponse.data);
        } catch (error) {
            setError("Unable to load data. Please start JSON Server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleBooking = async (studentData) => {
        try {
            if (!selectedSeat || selectedSeat.status !== "available") {

                return;
            }

            const bookingData = {
                seatId: selectedSeat.seatId,
                studentName: studentData.studentName,
                rollNo: studentData.rollNo,
                date: new Date().toISOString().split("T")[0],
                status: "active"
            };

            await axios.post(bookingApi, bookingData);

            await axios.patch(`${seatApi}/${selectedSeat.id}`, {
                status: "reserved"
            });
            setSelectedSeat(null);
            getData();
        } catch (error) {
            alert("Booking failed. Please try again.");
            getData();
        }
    };
    const handleCancel = async (booking) => {
        const confirmCancel = window.confirm(
            `Are you sure you want to cancel seat ${booking.seatId}?`
        );

        if (!confirmCancel) {
            return;
        }

        const seat = seats.find(
            (item) => item.seatId === booking.seatId
        );

        await axios.delete(`${bookingApi}/${booking.id}`);

        if (seat) {
            await axios.patch(`${seatApi}/${seat.id}`, {
                status: "available"
            });
            getData();
        }
    };

    return (
        <div className="app-layout">
            <Sidebar setPage={setPage} />

            <main className="main-content">
                <Header />

                <div className="page-content">

                    <>
                        {page === "dashboard" && (
                            <>
                                <SeatGrid
                                    seats={seats}
                                    filter={filter}
                                    setFilter={setFilter}
                                    onSelectSeat={setSelectedSeat}
                                />
                            </>
                        )}

                        {page === "seats" && (
                            <>
                                <div className="welcome-section">
                                    <div>
                                        <h2>Seat Layout</h2>
                                        <p>Choose an available seat to book.</p>
                                    </div>
                                </div>

                                <SeatGrid
                                    seats={seats}
                                    filter={filter}
                                    setFilter={setFilter}
                                    onSelectSeat={setSelectedSeat}
                                />
                            </>
                        )}

                        {page === "bookings" && (
                            <>


                                <MyBookings
                                    bookings={bookings}
                                    onCancel={handleCancel}
                                />
                            </>
                        )}
                    </>
                </div>
            </main>

            <SeatDetails
                seat={selectedSeat}
                onClose={() => setSelectedSeat(null)}
                onBook={handleBooking}
            />
        </div>
    );
}

export default App;
