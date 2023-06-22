import logo from './logo.svg';
import './App.css';
import {
  PartyCreateForm 
 } from './ui-components';

function App() {
  return (
     <div className='App' >
        <h2>Welcome to the party picture sharing app! Here you can upload all the pictures you took at the party!</h2>
        <PartyCreateForm />

    </div>
  );
}

export default App;
