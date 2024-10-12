import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import { Header, Layout } from "./components";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <Header />
                <main className='flex '>
                    <Sidebar />
                    <div className='w-full  m-5 border-[1px] border-gray-400 rounded-lg'>
                        <Layout />
                    </div>
                </main>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
