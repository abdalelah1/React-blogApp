
import NavBar from './NavBar';
import Home from './Home';

function App() {
  const title= 'welcome to the new blog' ; 
  const liked = 50;
  return (
    <div className="App">
      <NavBar />
     <div className="content">
      < Home />
     </div>
    </div>
  );
}

export default App;
