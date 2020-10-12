import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };
  movieMap = (movie) =>
    this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handleDelete(movie)}
            className="btn bg-danger btn-sm text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  //   handleDelete = (movie) => {};
  render() {
    if (this.state.movies.length === 0) {
      return <p className="p-3">There are no movies in the database</p>;
    }
    return (
      <>
        <p className="p-3">
          Showing {this.state.movies.length} movies in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>{this.movieMap()}</tbody>
        </table>
      </>
    );
  }
}
