import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route exact={true} path='/' element={<Home />} />
            </Routes>
        </Layout>
    </Router>
  )
}

export default App