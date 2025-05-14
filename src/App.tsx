
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { footerProps } from "./constants/footer";
import LandingPage from "./pages/landing-page/LandingPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen" id="app-wrapper">
      <Header appName="Geo City App"/>
      <main className="flex-1 p-4"><LandingPage /></main>
      <Footer {...footerProps}></Footer>
    </div>
  )
}

export default App
