import { Fragment } from 'react/jsx-dev-runtime';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Layout from './layout/Layout';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/r" element={<div>n,nm,yuy</div>}/>
          <Route path="/2" element={<div>n,nm,yeeeeeeuy</div>}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
