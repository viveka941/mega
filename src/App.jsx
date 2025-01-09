import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import AuthService from "./appwirte/auth";

import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./component";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block ">
        <Header />
        <main>
          
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
