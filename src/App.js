import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Book from './pages/Book';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='book/:id' element={<BookDetail />} />
          <Route path=':category' element={<Book />} />
      </Routes>
    </main>
  );
}

export default App;
