// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import  { Route,BrowserRouter as Router,Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import AdmissionPage from "./components/pages/AdmissionPage";
import ContactPage from "./components/pages/ContactPage";
import CoursesPage from "./components/pages/CoursesPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Saniya Durgappa Gadivaddar"
          studentPhotoUrl="/Images/saniya.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
     <Router>
        <header/>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/home" element ={<HomePage/>}/>
        <Route path="/admission" element ={<AdmissionPage/>}/>
        <Route path="/about" element ={<AboutPage/>}/>
        <Route path="/contact" element ={<ContactPage/>}/>
        <Route path="/courses" element ={<CoursesPage/>}/>
        <Route path="/notfound" element ={<NotFoundPage/>}/>
          </Routes>
          <ChatbotComponent/>
          </Router>
          </>
  )
}
export default App;


