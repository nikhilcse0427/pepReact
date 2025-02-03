
// - `title`: The title of the movie (string).
// - `releaseYear`: The year the movie was released (number).
// - `genre`: The genre of the movie (string).
// - `rating`: The movie's rating (number, between 1 and 10).

// ```js
const movies = [
  { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
  { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
  { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
  { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
  { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
  { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
  { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
]


// 1. **Sort the Movies by Rating**: Sort the movies so that the highest-rated movie comes first.
movies.sort(((a,b)=> b.rating - a.rating))
console.log(movies)


// 2. **Find a Movie by Title**: Write a function that takes a movie title as a parameter and returns the movie object. If no movie is found, return a message indicating that the movie is not in the catalog.
function findMovieTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    return movie;
  } else {
    return `The movie titled "${title}" is not in the catalog.`;
  }
}

console.log(findMovieTitle('Inception')); 
console.log(findMovieTitle('Mission Imposible')); 



// 3. **Get Movies with a Rating Greater Than 8**: Create a new array of movies that have a rating greater than 8.

const moviesWithHighestRating = movies.filter((movie) => movie.rating > 8);
console.log(moviesWithHighestRating);

// 4. **List All Movie Titles**: Create an array of only the movie titles.

const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// 5. **Count Movies in a Specific Genre**: Write a function that takes a genre as a parameter and returns the number of movies in that genre.

function countMovies(genre) {
  const moviesInGenre = movies.filter((movie) => movie.genre === genre);
  return moviesInGenre.length;
}

// Example Usage
console.log(countMovies('Sci-Fi')); // Returns the number of Sci-Fi movies

// 6. **Check if All Movies Are Rated Above 7**: Check if every movie in the catalog has a rating above 7.

const moviesAbove7 = movies.every((movie) => movie.rating > 7);
console.log(moviesAbove7); 

// 7. **Get Movies Released After 2000**: Create a new array that includes only movies released after the year 2000.

const moviesAfter2000 = movies.filter((movie) => movie.releaseYear > 2000);
console.log(moviesAfter2000);
