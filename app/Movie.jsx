import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
  rating,
  totalRating,
}) {
  return (
    <div className='border rounded-sm shadow-sm'>
      <Link href={`/${id}`}>
        <Image
          src={process.env.API_IMAGE_LINK + poster_path}
          width={600}
          height={600}
          alt={title}
        />
      </Link>
      <div className='p-3'>
        <h1 className='text-xl font-medium'>{title}</h1>
        <h2 className='my-2'>
          <span className='text-green-400'> Release Date :</span>{' '}
          {moment(release_date).format('D MMM, YYYY')}
        </h2>
        <p>
          <span className='text-red-400'>Rating : </span> {rating} (
          {totalRating} ratings)
        </p>
      </div>
    </div>
  )
}
