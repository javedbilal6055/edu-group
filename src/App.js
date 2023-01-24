import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutUS/aboutUs";
import InstitutionPage from "./pages/institution/institution";
import TeacherPage from "./pages/teacher/teacher";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import RevolutionBox from "./components/revolutionBox/revolutionBox";
import SliderDesktop from "./components/slider/sliderDesktop";
import StudentOffline from "./pages/student/studentOffline";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/institution" element={<InstitutionPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/student" element={<StudentOffline/>} />
          <Route path="/student-on" element={<h2>Studen Online</h2>} />
          <Route path="/adminZone" element={<h2>AdmiinZone</h2>} />
          <Route path="/StudentZone" element={<h2>StudentZone</h2>} />
          <Route path="/teacherZone" element={<h2>TeacherZone</h2>} />
          <Route path="/instituteZone" element={<h2>StudentZone</h2>} />
          <Route path="/paymentPage:trxId" element={<h3>Payment Zone</h3>} />
        </Routes>
        <RevolutionBox />
        <SliderDesktop />
        <Contact buttonText={"Submit"} buttonStyleName={"login"} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
