import React, { useEffect, useState } from "react"
import { getPopulars } from "../../services/popularsService"
import Gallery from "../../components/Gallery/Gallery"

function Home() {
  const [popularMovies, setPopularMovies] = useState([])
  const [popularTV, setPopularTV] = useState([])
  const [moviePage, setMoviePage] = useState(1)
  const [tvPage, setTvPage] = useState(1)

  useEffect(() => {
    const fetchPopularsData = async () => {
      try {
        const moviesData = await getPopulars("movie", moviePage)
        setPopularMovies(moviesData.results)
        const tvData = await getPopulars("tv", tvPage)
        setPopularTV(tvData.results)
      } catch (error) {
        console.error("Error fetching populars:", error)
      }
    }

    fetchPopularsData()
  }, [moviePage, tvPage])

  const handleNextPage = (type) => () => {
    switch (type) {
      case "movie":
        setMoviePage((prevPage) => prevPage + 1)
        break
      case "tv":
        setTvPage((prevPage) => prevPage + 1)
        break
      default:
        break
    }
  }

  const handlePrevPage = (type) => () => {
    switch (type) {
      case "movie":
        setMoviePage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1))
        break
      case "tv":
        setTvPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1))
        break
      default:
        break
    }
  }

  return (
    <main className="main-content">
      <Gallery
        data={popularMovies}
        galleryName="Popular Movies"
        handleNextPage={handleNextPage("movie")}
        handlePrevPage={handlePrevPage("movie")}
        activePage={moviePage}
      />
      <Gallery
        data={popularTV}
        galleryName="Popular TV Shows"
        darker={true}
        handleNextPage={handleNextPage("tv")}
        handlePrevPage={handlePrevPage("tv")}
        activePage={tvPage}
      />
    </main>
  )
}

export default Home
