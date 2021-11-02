import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const REVIEWS = gql`
  query GetReviews {
    reviews {
      id
      rating
      title
      body
      catergories {
        name
        id
      }
    }
  }
`

export default function Homepage() {
  //   const { loading, error, data } = useFetch('http://localhost:1337/reviews')

  const { loading, error, data } = useQuery(REVIEWS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.rating}</div>
          <h2>{review.title}</h2>

          {review.catergories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}
