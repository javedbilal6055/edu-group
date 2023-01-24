import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import InstitutionPage from "./pages/institution/institution";
function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/institution" element={<InstitutionPage/>} />
          <Route path="/teacher" element={<h2>teacher</h2>} />
          <Route path="/about-us" element={<h2>About Us</h2>} />
          <Route path="/student" element={<h2>Student Offline</h2>} />
          <Route path="/student-on" element={<h2>Studen Online</h2>} />
          <Route path="/adminZone" element={<h2>AdmiinZone</h2>} />
          <Route path="/StudentZone" element={<h2>StudentZone</h2>} />
          <Route path="/teacherZone" element={<h2>TeacherZone</h2>} />
          <Route path="/instituteZone" element={<h2>StudentZone</h2>} />
          <Route path="/paymentPage:trxId" element={<h3>Payment Zone</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
