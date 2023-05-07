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
        <h2>{flight.departs}</h2>
        <br />

        <a href="/flights">Flights Page</a>
      </div>
    );
  }
}

module.exports = Show;
