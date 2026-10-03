
function Sidebar({ page, setPage }) {
    return (
        <aside className="sidebar">
            <h2 className="logo">Campus<span>Seat</span></h2>

            <p className="menu-title">MENU</p>

            <button
                className={"menu-item active"}
                onClick={() => setPage("dashboard")}
            > Dashboard
            </button>

            <button
                className={"menu-item active"}
                onClick={() => setPage("bookings")}
            > My Bookings
            </button>

            <div className="sidebar-bottom">
                <p>Campus Seat Finder</p>
                <small>Daksh Khuha</small>
            </div>
        </aside>
    );
}

export default Sidebar;
