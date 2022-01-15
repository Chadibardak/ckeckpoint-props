import Profile from './Profile/Profile';
import './App.css';

const App =()=> {
  const handleName = (name) => {
    alert(name)
  }
  return (
    <div className="App">
      <div class="card-holder">
  <div class="card">
  <Profile fullname="chadi bardak" handleName={handleName}><img src="/chadibardak-Gallery.jpg" alt "/chadibardak-Gallery.jpg" style={{width:'55%',borderRadius:'20%' }}/> </Profile>

  </div>
</div>

    </div>
  );
}

export default App;