import Movie from './Movie'
export default async function Home() {
  const data = await fetch(
    `${process.env.API_LINK}/movie/popular?api_key=${process.env.API_KEY}`
  )

  const res = await data.json()

  console.log(res)

  return (
    <main>
      <div className='my-3'>
        <h1 className='text-center font-bold text-3xl underline'>
          Popular Movies List
        </h1>
      </div>

      <div className='grid gap-16 grid-cols-fluid'>
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            rating={movie.vote_average}
            totalRating={movie.vote_count}
          />
        ))}
      </div>
    </main>
  )
}
