const React = require("react");

class Show extends React.Component {
  render() {
    const flight = this.props.Flight;

    return (
      <div>
        <h1>Flight Details </h1>
        <h2>{flight.airline}</h2>
        <br />
        <h2>{flight.flightNo}</h2>
        <br />
        <h2>{flight.departs.toISOString().slice(0, 16)}</h2>
        <br />
        <h2>{flight.airport}</h2>
        <h2>
          Destination Airport:
          {flight.destinations.map((destination, i) => {
            return (
              <h2>
                {destination.airport}{" "}
                {destination.arrival.toISOString().slice(0, 16)}
              </h2>
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
          Add Date: <input type="datetime-local" name="departure" />
          <input type="submit" value="submit" />
        </form>
        <a href="/flights">Flights Page</a>
      </div>
    );
  }
}

module.exports = Show;
