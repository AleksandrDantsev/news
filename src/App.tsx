import { Fragment } from 'react/jsx-dev-runtime';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Layout from './layout/Layout';
import NewsQuickCard from './components/NewsQuickCard/NewsQuickCard';
import Main from './pages/Main/Main';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path="/2" element={<div>n,nm,yeeeeeeuy</div>}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
