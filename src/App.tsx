import { Fragment } from 'react/jsx-dev-runtime';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Layout from './layout/Layout';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="/1" element={<Article />}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
