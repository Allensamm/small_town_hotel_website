export default function BookingBar() {
  return (
    <div className="booking-bar relative z-30" id="book">
      <div className="booking-bar-inner">
        <div className="booking-field">
          <label htmlFor="checkin">Check In</label>
          <input type="date" id="checkin" name="checkin" />
        </div>
        <div className="booking-field">
          <label htmlFor="checkout">Check Out</label>
          <input type="date" id="checkout" name="checkout" />
        </div>
        <div className="booking-field">
          <label htmlFor="guests">Guests</label>
          <select id="guests" name="guests" defaultValue="2">
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="2+1">2 Adults, 1 Child</option>
            <option value="2+2">2 Adults, 2 Children</option>
          </select>
        </div>
        <div className="booking-field">
          <label htmlFor="roomType">Room Type</label>
          <select id="roomType" name="roomType" defaultValue="">
            <option value="">All Room Types</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="premium">Premium Suite</option>
            <option value="executive">Executive Suite</option>
            <option value="presidential">Presidential Suite</option>
            <option value="penthouse">Royal Penthouse</option>
          </select>
        </div>
        <div className="booking-submit text-center lg:text-left mt-4 lg:mt-0">
          <button className="btn-primary w-full lg:w-auto h-full py-4 text-xs font-semibold tracking-widest uppercase">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
