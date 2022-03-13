import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from "../Movie.module.css"
const images = [
    "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjZjOTU3MTMtYTM5YS00YjZmLThmNmMtODcwOTM1NmRiMWM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTUzODA4Nzk0OF5BMl5BanBnXkFtZTgwNzE1MDIwMDI@._V1_SX300.jpg"
];
const SlideShow = () => {
  return (
    <div className="slide-container">
    <Zoom scale={0.7}>
      {
        images.map((each, index) => <img key={index} className={styles.window}  src={each} />)
      }
    </Zoom>
     </div>
  )
}

export default SlideShow
