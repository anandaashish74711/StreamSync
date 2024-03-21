import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { SocketProvider } from './providers/Socket';


function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/room/:roomId' element={<h1>We are in room</h1>} />
         
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
