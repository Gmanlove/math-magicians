import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './routes/Home';
import CalculatorRoute from './routes/CalculatorRoute';
import Quotes from './routes/Quotes';
import Error from './routes/Error';

const App = () => (
  <Router>
    <div>
      <header id="header">
        <h1>Math Magicians</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/Quote">Quote</Link>
        </nav>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<CalculatorRoute />} />
      <Route path="/Quote" element={<Quotes />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
