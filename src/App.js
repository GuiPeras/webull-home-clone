import GlobalStyle from "./globalStyles";

const { default: Hero } = require("./components/Hero");
const { default: Navbar } = require("./components/Navbar");

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Navbar></Navbar>
            <Hero></Hero>
        </>
    );
}

export default App;
