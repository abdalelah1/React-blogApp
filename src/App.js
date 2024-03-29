
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router  ,Route , Routes } from 'react-router-dom';
import CreateBlog from './Create';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
     <div className="content">
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateBlog />} />


     </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
