const React = require("react");

class Index extends React.Component {
  render() {
    const { flight } = this.props;

    return (
      <div>
        <h1>This is the Flight page</h1>
        <ul>
          {flight.map((flights, i) => {
            return (
              <li key={i}>
                {flights.airline}
                <br />
                {flights.flightNo}
                <br />
                {flights.departs.toISOString().slice(0, 16)}
                <br />
                {flights.airport}
                <br />
                <a href={`/flights/${flights._id}`}>Details</a>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
