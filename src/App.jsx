import { Routes, Route,useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Landing/forms/Login";
import Register from "./Landing/forms/Register";
import AskQuestion from "./pages/AskQuestion";
import QuestionDetail from "./pages/QuestionDetail";
import { useEffect , useState , createContext } from "react";
import axios from "./axiosConfig";


export const AppState = createContext();

function App() {
	const token = localStorage.getItem("token");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

async function checkLogedIn () {
  try {
   const {data} = await axios.get('/users/check',{
    headers:{
      Authorization:'Bearer ' + token,
    }

   })
   console.log(data)
  setUser(data)
  
  } catch (error) {
  console.log(error.response)
    navigate('/login')
  }
}
console.log(user)

  useEffect(() => {
    	checkLogedIn();
			}, []);

      console.log(user)
  return (
    <AppState.Provider value={{user,setUser}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ask-questions" element={<AskQuestion />} />
        <Route
					path="/single-questions/:question_id"
					element={<QuestionDetail />}
				></Route>
      </Routes>
      <Footer />
    </AppState.Provider>
  );
}

export default App;
