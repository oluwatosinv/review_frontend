import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import SiteHeader from './components/SiteHeader'
import Category from './pages/Category'
import Hompage from './pages/Hompage'
import ReviewDetails from './pages/ReviewDetails'

// Appollo Client
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
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
