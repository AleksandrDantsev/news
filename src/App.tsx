import { Fragment } from 'react/jsx-dev-runtime';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Layout from './layout/Layout';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import { SearchWindow } from './pages/SearchWindow/SearchWindow';
import { ReadLaterCollection } from './pages/ReadLaterCollection/ReadLaterCollection';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="/politics/:id" element={<Article />}/>
          <Route path="/search" element={<SearchWindow />}/>
          <Route path="/read-later" element={<ReadLaterCollection />}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
