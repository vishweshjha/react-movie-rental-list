import React from "react";
import { Table } from "reactstrap";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/15ugdc")
      .then(response => response.json())
      .then(data => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    let num = 0;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Serial No.#</th>
              <th>Movie Title</th>
              <th>Movie Rating</th>
              <th>Movie Descriptions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(el => (
              <tr key={el.id}>
                <td>{(num = num + 1)}</td>
                <td>{el.title}</td>
                <td>{el.rating}</td>
                <td>{el.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MovieList;
