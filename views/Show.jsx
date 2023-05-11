const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const flight = this.props.Flight;
    return (
      <DefaultLayout title="Destination Details" link="/flights" text="Home">
        <h2>Airline: {flight.airline}</h2>
        <br />
        <h2>Flight Number: {flight.flightNo}</h2>
        <br />
        <h2>Departure Date: {flight.departs.toISOString().slice(0, 16)}</h2>
        <br />
        <h2>Departing From: {flight.airport}</h2>
        <h2>
          Destination Airport:
          {flight.destinations.map((destination, i) => {
            return (
              <div key={i}>
                <h5>{destination.airport}</h5>
                <br />
                <h5>{destination.arrival.toISOString().slice(0, 16)}</h5>
              </div>
            );
          })}
        </h2>
        <form method="POST" action={`/destinations/${flight._id}`}>
          <label>Choose Destination</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          Add Date: <input type="datetime-local" name="arrival" />
          <input type="submit" value="submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
