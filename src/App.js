
import Header from "./components/Header.js";
import Main from './components/Main.js'
import Navbar from "./components/Navbar/Navbar.js";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-montserrat h-full">
      <Header/>
      <div className='flex md:justify-start bg-bg-metal min-h-full'>
        <Navbar/>
        <QueryClientProvider client={queryClient}>
          <Main/>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
