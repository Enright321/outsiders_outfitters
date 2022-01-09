import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryScreen from './screens/CategoryScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/:category' element={<CategoryScreen />} />
          <Route path='/:category/:id' element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
