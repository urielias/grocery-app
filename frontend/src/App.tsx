import React, { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import AddEditGroceryList from "./pages/AddEditGroceryList";
import { Page, AppContext, AppData } from "./appTypes";
import LogInPage from "./pages/LogInPage";



export const GlobalContext = createContext<AppContext>({
    global: { currentPage: "login", server: "http://localhost:3000", userID: 1 },
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
    const [global, setGlobal] = useState<AppData>({ currentPage: "login", server: "http://localhost:3000", userID: 1 });

    return (
        <GlobalContext.Provider value={{ global, setGlobal }}>
            <PageSwitcher page={global.currentPage} />
        </GlobalContext.Provider>
    );
}

export default App;