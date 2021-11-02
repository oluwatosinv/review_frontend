import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATERGORIES = gql`
  query GetCatergories {
    catergories {
      id
      name
    }
  }
`

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATERGORIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div className='site-header'>
      <Link to='/'>
        <h1>Welcome to reviews</h1>
      </Link>
      <nav className='categories'>
        <span>Filter by Catergories:</span>
        {data.catergories.map((catergory) => (
          <Link key='catergory.id' to={`/catergory/${catergory.id}`}>
            {catergory.name}
            {console.log(catergory.id)}
          </Link>
        ))}
      </nav>
    </div>
  )
}
