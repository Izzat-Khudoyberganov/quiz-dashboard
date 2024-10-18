import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from "./context/theme-provider";
import { UserContextProvider } from "./context/user-provider";
import { SwitchRoute } from "./pages";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <UserContextProvider>
                    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                        <SwitchRoute />
                    </ThemeProvider>
                </UserContextProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
