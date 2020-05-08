import React from "react";
import PropTypes from "prop-types";
export class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id="movies">
        <ul>
          {this.props.filmovi.map((film, i) => {
            return (
              <li key={i}>
                <span>Movie name: {film.name}</span>
                <br />

                <span>Genre: {film.genre}</span>
                <br />
                <span>Release: {film.year}</span>
                <br />
                <span>{film.image}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
Movies.propTypes = {
  filmovi: PropTypes.array.isRequired,
  genre: PropTypes.string,
  year: PropTypes.number,
  isValid: PropTypes.bool,
};
