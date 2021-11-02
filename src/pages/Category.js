import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const CATERGORY = gql`
  query GetCatergory($id: ID!) {
    catergory(id: $id) {
      name
      id
      reviews {
        title
        rating
        id
        body
        catergories {
          name
          id
        }
      }
    }
  }
`
export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATERGORY, {
    variables: { id: id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  return (
    <div>
      <h2>{data.catergory.name}</h2>
      {data.catergory.reviews.map((review) => (
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
