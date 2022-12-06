import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useAuth } from "./context";
import { usePromiseEffect } from "./hooks";
import { HomePage, LoginPage, NewsPage, ProfilePage } from "./pages";
import { newsService } from "./services";
import { News } from "./types";

function App() {
  const { user: { isLoggedIn } } = useAuth();
  const news = usePromiseEffect<News[]>(async () => {
    return await newsService.getAllNews();
  }, []);

  return (
    <div className="container mx-auto px-4 w-1/2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/news"
            element={<NewsPage news={news.value} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
