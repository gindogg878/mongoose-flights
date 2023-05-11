const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Create Flight" link="/flights" text="Home">
        <form action="/flights" method="POST">
          Airline:
          <input type="radio" id="American" value="American" name="airline" />
          <label>American</label>
          <input type="radio" id="Southwest" value="Southwest" name="airline" />
          <label>Southwest</label>
          <input type="radio" id="United" value="United" name="airline" />
          <label>United</label>
          <br />
          Add Flight No: <input type="text" name="flightNo" /> <br />
          Add Date: <input type="datetime-local" name="departs" />
          <br />
          <label>Choose Airport</label>
          <select name="airport">
            <option type="text" value="AUS">
              AUS
            </option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <input type="submit" value="Create Flight" />
        </form>
        <br />
      </DefaultLayout>
    );
  }
}

module.exports = New;
