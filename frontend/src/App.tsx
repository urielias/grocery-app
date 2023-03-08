import React, { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import AddEditGroceryList from "./pages/AddEditGroceryList";
import { Page, AppContext, AppData } from "./appTypes";
import LogInPage from "./pages/LogInPage";
import NavBar from "./components/NavBar";



export const GlobalContext = createContext<AppContext>({
    global: { currentPage: "login", server: "http://localhost:5500" },
    setGlobal: () => {}
});

const PageSwitcher = (props: { page: Page }) => {
    const { page } = props;
    switch (page) {
        case "home":
            return <HomePage />
        case "list_editor":
            return <AddEditGroceryList/>
    }
    return <LogInPage />
}


const App = () => {
    const [global, setGlobal] = useState<AppData>({ currentPage: "login", server: "http://localhost:5500" });

    return (
        <GlobalContext.Provider value={{ global, setGlobal }}>
            <NavBar rightNav={global.userID !== undefined} />
            <PageSwitcher page={global.currentPage} />
        </GlobalContext.Provider>
    );
}

export default App;