const cartoonContainer = document.getElementById("cartoon-container")
const cartoons = [
 {
  title: "Spongebob Squarepants",
  year: 1999,
  creator: ["Stephen Hillenburg"],
  rating: "TV-Y",
  genre: ["Comedy", "Family"],
  runtime_in_minutes: 23,
  episodes: 272,
  image: "download1.png",
  id: 1,
  watchLink: "https://www.youtube.com/results?search_query=Spongebob+Squarepants",
 },
 {
  title: "The Simpsons",
  year: 1999,
  creator: ["Matt Groening"],
  rating: "TV-PG",
  genre: ["Comedy"],
  runtime_in_minutes: 22,
  episodes: 684,
  image: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  id: 2,
  watchLink: "https://www.youtube.com/results?search_query=The+Simpsons",
 },
 {
  title: "Star vs the Forces of Evil",
  year: 1999,
  creator: ["Stephen Hillenburg"],
  rating: "TV-Y7",
  genre: ["Action", "Adventure"],
  runtime_in_minutes: 22,
  episodes: 77,
  image: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  id: 3,
  watchLink: "https://www.youtube.com/results?search_query=Star+vs+the+Forces+of+Evil",
 },
 {
  title: "Gravity Falls",
  year: 2012,
  creator: ["Alex Hirsch"],
  rating: "TV-Y7",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 23,
  episodes: 40,
  image: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SY1000_CR0,0,641,1000_AL_.jpg",
  id: 4,
  watchLink: "https://www.youtube.com/results?search_query=Gravity+Falls",
 },
 {
  title: "Bojack Horseman",
  year: 2014,
  creator: ["Raphael Bob-Waksberg"],
  rating: "TV-MA",
  genre: ["Drama", "Comedy"],
  runtime_in_minutes: 25,
  episodes: 77,
  image: "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  id: 5,
  watchLink: "https://www.youtube.com/results?search_query=Bojack+Horseman",
 },
 {
  title: "Steven Universe",
  year: 2013,
  creator: ["Rebecca Sugar"],
  rating: "TV-PG",
  genre: ["Short", "Adventure"],
  runtime_in_minutes: 11,
  episodes: 175,
  image: "download.jpeg",
  id: 6,
  watchLink: "https://www.youtube.com/results?search_query=steven+universe",
 },
 {
  title: "Adventure Time",
  year: 2010,
  creator: ["Pendleton Ward"],
  rating: "TV-PG",
  genre: ["Short", "Action"],
  runtime_in_minutes: 11,
  episodes: 289,
  image: "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
  id: 7,
  watchLink: "https://www.youtube.com/results?search_query=Adventure+Time",
 },
 {
  title: "Pokemon",
  year: 1997,
  creator: ["Junichi Masada", "Ken Sugimori", "Satoshi Tajiri"],
  rating: "TV-Y",
  genre: ["Adventure", "Action"],
  runtime_in_minutes: 24,
  episodes: 1131,
  image: "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_.jpg",
  id: 8,
  watchLink: "https://www.youtube.com/results?search_query=Pokemon",
 },
 {
  title: "Yu-Gi-Oh!",
  year: 2000,
  creator: ["Kazuki Takashi"],
  rating: "TV-Y",
  genre: ["Adventure", "Action"],
  runtime_in_minutes: 24,
  episodes: 225,
  image: "download4.jpeg",
  id: 9,
  watchLink: "https://www.youtube.com/results?search_query=Yu-Gi-Oh!",
 },
 {
  title: "Rugrats",
  year: 1990,
  creator: ["Gabor Csupo", "Paul Germain"],
  rating: "TV-Y",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 179,
  image: "https://i.kinja-img.com/gawker-media/image/upload/t_original/lseuxpzwkntjf0coatv2.jpg",
  id: 10,
  watchLink: "https://www.youtube.com/results?search_query=Rugrats",
 },
 {
  title: "My Little Pony: Friendship is Magic",
  year: 2010,
  creator: ["Lauren Faust", "Bonnie Zacherle"],
  rating: "TV-Y",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 22,
  episodes: 235,
  image: "https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
  id: 11,
  watchLink: "https://www.youtube.com/results?search_query=My+Little+Pony%3A+Friendship+is+Magic",
 },
 {
  title: "Ed, Edd n Eddy",
  year: 1999,
  creator: ["Danny Antonucci"],
  rating: "TV-Y7",
  genre: ["Family", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 80,
  image: "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
  id: 12,
  watchLink: "https://www.youtube.com/results?search_query=Ed%2C+Edd+n+Eddy",
 },
 {
  title: "Courage the Cowardly Dog",
  year: 1999,
  creator: ["John Dilworth"],
  rating: "TV-Y7",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 11,
  episodes: 52,
  image: "https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
  id: 13,
  watchLink: "https://www.youtube.com/results?search_query=Courage+the+Cowardly+Dog",
 },
 {
  title: "Powerpuff Girls",
  year: 1998,
  creator: ["Craig McCracken"],
  rating: "TV-Y7-FV",
  genre: ["Adventure", "Action"],
  runtime_in_minutes: 30,
  episodes: 79,
  image: "download2.jpeg",
  id: 14,
  watchLink: "https://www.youtube.com/results?search_query=Powerpuff+Girls",
 },
 {
  title: "Dexter's Lab",
  year: 1996,
  creator: ["Craig McCracken", "Genndy Tartakovsky"],
  rating: "TV-G",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 23,
  episodes: 79,
  image: "https://m.media-amazon.com/images/M/MV5BMzdlMDMxNzItNmViNS00NDRkLTg3OWMtNjliZGIxY2M5N2YyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  id: 15,
  watchLink: "https://www.youtube.com/results?search_query=Dexter%27s+Lab",
 },
 {
  title: "Cow and Chicken",
  year: 1995,
  creator: ["David Feiss"],
  rating: "TV-PG",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 53,
  image: "https://m.media-amazon.com/images/M/MV5BMDFkYjE4ZGYtZDkyNC00ZmFiLWJiMGYtNjlmZWVmYWEwNTZhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,712,1000_AL_.jpg",
  id: 16,
  watchLink: "https://www.youtube.com/results?search_query=Cow+and+Chicken",
 },
 {
  title: "I am Weasel",
  year: 1997,
  creator: ["David Feiss"],
  rating: "TV-G",
  genre: ["Adventure", "Short"],
  runtime_in_minutes: 30,
  episodes: 79,
  image: "https://m.media-amazon.com/images/M/MV5BZWY0YjA1YzQtM2ViYS00ZTRiLTlmYjUtZDJhNDlkMGI5NTU1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,750,1000_AL_.jpg",
  id: 17,
  watchLink: "https://www.youtube.com/results?search_query=I+am+Weasel",
 },
 {
  title: "Johnny Bravo",
  year: 1997,
  creator: ["Van Partible"],
  rating: "TV-Y7",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 67,
  image: "https://m.media-amazon.com/images/M/MV5BZWE5NjBiNDktYWI4ZC00YjA0LWE1OGEtMzVlZTg1ZTk2MmMzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,733,1000_AL_.jpg",
  id: 18,
  watchLink: "https://www.youtube.com/results?search_query=Johnny+Bravo",
 },
 {
  title: "Kablam",
  year: 1996,
  creator: ["Will McRob"],
  rating: "TV-Y7",
  genre: ["Family", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 48,
  image: "https://m.media-amazon.com/images/M/MV5BNjE3ZTdmNTctZmYzZi00MDRmLTgzNjUtYTc1MjBiOTdjNjJlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg",
  id: 19,
  watchLink: "https://www.youtube.com/results?search_query=Kablam",
 },
 {
  title: "Hey Arnold",
  year: 1996,
  creator: ["Craig Bartlett"],
  rating: "TV-Y7",
  genre: ["Drama", "Comedy"],
  runtime_in_minutes: 15,
  episodes: 103,
  image: "https://m.media-amazon.com/images/M/MV5BMzhmMjE2YTYtMTc1Ni00Nzg0LWJhNTItZWZjZDNkNjRmOTAyXkEyXkFqcGdeQXVyODMyNjA3NzQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  id: 20,
  watchLink: "https://www.youtube.com/results?search_query=Hey+Arnold",
 },
 {
  title: "Angry Beavers",
  year: 1996,
  creator: ["Mitch Schauer", "Keith Kaczorek"],
  rating: "TV-G",
  genre: ["Family", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 64,
  image: "https://m.media-amazon.com/images/M/MV5BODg2MGY5MDYtMGM5MS00OTg0LWE1YmEtM2IxN2Y1YzAzNjFiXkEyXkFqcGdeQXVyODg5MjMwNTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  id: 21,
  watchLink: "https://www.youtube.com/results?search_query=Angry+Beavers",
 },
 {
  title: "CatDog",
  year: 1998,
  creator: ["Peter Hannan"],
  rating: "TV-Y",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 23,
  episodes: 67,
  image: "download3.jpeg",
  id: 22,
  watchLink: "https://www.youtube.com/results?search_query=CatDog",
 },
 {
  title: "The New Adventures of Winnie the Pooh",
  year: 1988,
  creator: ["Karl Geurs", "Terence Harrison", "Ken Kessel"],
  rating: "TV-Y",
  genre: ["Adventure", "Comedy"],
  runtime_in_minutes: 30,
  episodes: 50,
  image: "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  id: 23,
  watchLink: "https://www.youtube.com/results?search_query=Winnie+the+Pooh",
 },
 {
  title: "Reboot",
  year: 1994,
  creator: ["Gavin Blair", "John Grace", "Philip Mitchell"],
  rating: "TV-Y7",
  genre: ["Adventure", "Action"],
  runtime_in_minutes: 30,
  episodes: 47,
  image: "https://m.media-amazon.com/images/M/MV5BMTg1NzQ3NTI0MF5BMl5BanBnXkFtZTcwMzcwOTUyMQ@@._V1_.jpg",
  id: 1,
  watchLink: "https://www.youtube.com/results?search_query=Reboot",
 },
 {
  title: "Beast Wars",
  year: 1996,
  creator: ["Steve Sacks", "Colin Davies", "John Pozer"],
  rating: "TV-Y7",
  genre: ["Sci-Fi", "Action"],
  runtime_in_minutes: 30,
  episodes: 52,
  image: "https://m.media-amazon.com/images/M/MV5BNDUxODg4MzE5NV5BMl5BanBnXkFtZTYwNDA0OTc4._V1_.jpg",
  id: 2,
  watchLink: "https://www.youtube.com/results?search_query=Beast+Wars",
 },
]
const groupCartoonsByGenre = (cartoons) => {
 const genreMap = {}

 cartoons.forEach((cartoon) => {
  cartoon.genre.forEach((genre) => {
   if (!genreMap[genre]) {
    genreMap[genre] = []
   }
   genreMap[genre].push(cartoon.title)
  })
 })

 return genreMap
}

const groupedCartoons = groupCartoonsByGenre(cartoons)
function filterByGenre(genre) {
 const filteredTitles = genre ? groupedCartoons[genre] : []
 const titleContainer = document.getElementById("titleContainer") 
 titleContainer.innerHTML = ""

 if (filteredTitles) {
  filteredTitles.forEach((title) => {
   const titleElement = document.createElement("div")
   titleElement.innerText = title 
   titleContainer.appendChild(titleElement)
  })
 }
}

function displayCartoons(filterCategory) {
 cartoonContainer.innerHTML = "" 
 const filteredCartoons = filterCategory ? cartoons.filter((cartoon) => cartoon.genre.some((genre) => genre.toLowerCase() === filterCategory.toLowerCase())) : cartoons 

 filteredCartoons.forEach(({ id, title, image, year, rating, genre, creator, watchLink }) => {
  const movieBox = document.createElement("div")
  movieBox.className = "col-md-4 mb-4"

  movieBox.innerHTML = `
            <div class="cartoon-card">
                <img src="${image}" class="card-img-top" alt="${title}" />
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <!-- Accordion button -->
                    <button class="btn btn-secondary" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse${id}" 
                        aria-expanded="false" 
                        aria-controls="collapse${id}">
                        Show More
                    </button>
                    <!-- Accordion Content -->
                    <div class="collapse" id="collapse${id}">
                        <div class="card card-body">
                            <p class="card-text">Year: ${year}<br>Rating: ${rating}<br>Genre: ${genre.join(", ")}</p>
                            <p class="card-text">Creator: ${creator.join(", ")}</p>
                            <a href="${watchLink}" class="btn btn-primary" target="_blank">Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>`

  cartoonContainer.appendChild(movieBox)
 })
}

window.onload = () => displayCartoons()

const categoryButtons = document.querySelectorAll("#category-filter button")
categoryButtons.forEach((button) => {
 button.addEventListener("click", () => {
  const genre = button.dataset.category 
  displayCartoons(genre) 
  filterByGenre(genre) 
 })
})
