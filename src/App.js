import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from 'components/Layout';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Layout />
      </Router>
    </RecoilRoot>
  );
}

export default App;
