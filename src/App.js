
import Header from "./components/Header.js";
import Main from './components/Main.js'
import Navbar from "./components/Navbar/Navbar.js";


function App() {
  return (
    <div className="font-montserrat h-full">
      <Header/>

      <div className='flex md:justify-start bg-bg-metal min-h-full'>
        <Navbar/>
       
        <Main/>
       
      </div>
    </div>
  );
}

export default App;
