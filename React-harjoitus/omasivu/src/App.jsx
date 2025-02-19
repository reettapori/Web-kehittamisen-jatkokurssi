import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css"; // Tuodaan CSS-tiedostot

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
