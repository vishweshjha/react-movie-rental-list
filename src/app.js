import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Movielist from "./component/movielist";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <h1>Movie Rental List</h1>
          </NavbarBrand>
        </Navbar>
        <Movielist />
      </div>
    );
  }
}

export default App;
