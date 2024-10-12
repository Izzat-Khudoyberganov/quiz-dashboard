import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import { UserContextProvider } from "./context/user-provider";
import { SwitchRoute } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                    <SwitchRoute />
                </ThemeProvider>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
