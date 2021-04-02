import React from 'react';
import { Container } from 'reactstrap';
import Navbar from './component/navbar';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
