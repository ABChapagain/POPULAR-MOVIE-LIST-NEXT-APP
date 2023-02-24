import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const data = await fetch(
    `${process.env.API_LINK}/movie/popular?api_key=${process.env.API_KEY}`
  )

  const res = await data.json()

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetail({ params }) {
  const { movie } = params
  const data = await fetch(
    `${process.env.API_LINK}/movie/${movie}?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  return (
    <>
      <div className='my-4'>
        <Link
          href={'/'}
          className='px-5 py-2 text-black bg-slate-200 rounded-md'
        >
          GO BACK
        </Link>
      </div>
      <div>
        <h2 className='text-2xl'>{res.title}</h2>
        <h2 className='text-lg'>{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className='text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md'>
          {res.status}
        </h2>
        <Image
          className='my-12 w-full'
          src={process.env.API_IMAGE_LINK + res.backdrop_path}
          width={1000}
          height={1000}
          alt={res.title}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </>
  )
}
