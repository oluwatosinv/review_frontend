import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import SiteHeader from './components/SiteHeader'
import Category from './pages/Category'
import Hompage from './pages/Hompage'
import ReviewDetails from './pages/ReviewDetails'
import { HttpLink } from 'apollo-link-http'

// Appollo Client
const cache = new InMemoryCache()
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
})
const client = new ApolloClient({
  cache,
  link,
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <SiteHeader />
          <Switch>
            <Route exact path='/'>
              <Hompage />
            </Route>
            <Route path='/details/:id'>
              <ReviewDetails />
            </Route>
            <Route path='/catergory/:id'>
              <Category />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  )
}

export default App
