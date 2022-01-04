import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryScreen from './screens/CategoryScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container className='container'>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/category/:id' element={<CategoryScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
