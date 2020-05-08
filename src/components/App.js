import React from "react";
import { Movies } from "./Movies";

export class App extends React.Component {
  render() {
    var movies = [
      {
        name: "Legend",
        genre: "Crime Thriller",
        year: 2015,
        image: (
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg"
            alt=""
            width="300px"
          />
        ),
      },
      {
        name: "Extraction",
        genre: "Action-Thriller",
        year: 2020,
        image: (
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png"
            alt=""
            width="300px"
          />
        ),
      },
      {
        name: "Aquaman",
        genre: "Science FIction",
        year: 2018,
        image: (
          <img
            src="https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg"
            alt=""
            width="300px"
          />
        ),
      },
    ];
    return (
      <div id="app">
        <Movies filmovi={movies} />
      </div>
    );
  }
}
