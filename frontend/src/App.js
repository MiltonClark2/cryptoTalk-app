import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Videos from "./Components/Videos";
import PageNotFound from "./Components/PageNotFound";
import Bot from "./Components/Bot"
import Cryptocurrency from "./Components/Cryptocurrency";

function App() {
  return (
    <Router>
      <NavBar/>
      <Bot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
