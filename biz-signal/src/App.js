import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCard from './components/MyCard';
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCard name="Gym"/>
      <MyCard name="Gym"/>
    </div>
  );
}

export default App;
