import React, { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import AddEditGroceryList from "./pages/AddEditGroceryList";
import { Page, AppContext, AppData } from "./appTypes";
import LogInPage from "./pages/LogInPage";
import NavBar from "./components/NavBar";
import "./GlobalStyling.css";
import food_1 from "./assets/food photos/food_1.jpeg";
import food_2 from "./assets/food photos/food_2.jpeg";
import food_3 from "./assets/food photos/food_3.jpeg";
import food_4 from "./assets/food photos/food_4.jpg";
import food_5 from "./assets/food photos/food_5.jpg";
import food_6 from "./assets/food photos/food_6.jpeg";
import food_7 from "./assets/food photos/food_7.jpg";
import food_8 from "./assets/food photos/food_8.jpg";
import food_9 from "./assets/food photos/food_9.jpg";
import food_10 from "./assets/food photos/food_10.jpg";
import food_11 from "./assets/food photos/food_11.jpg";
import food_12 from "./assets/food photos/food_12.jpg";
import food_13 from "./assets/food photos/food_13.jpg";
import food_14 from "./assets/food photos/food_14.jpg";
import food_15 from "./assets/food photos/food_15.jpg";
import food_16 from "./assets/food photos/food_16.jpg";
import food_17 from "./assets/food photos/food_17.jpg";
import food_18 from "./assets/food photos/food_18.jpg";
import food_19 from "./assets/food photos/food_19.jpg";
import food_20 from "./assets/food photos/food_20.jpg";
import food_21 from "./assets/food photos/food_21.jpeg";
import food_22 from "./assets/food photos/food_22.jpg";
import food_23 from "./assets/food photos/food_23.jpg";
import food_24 from "./assets/food photos/food_24.jpg";
import food_25 from "./assets/food photos/food_25.jpg";
import food_26 from "./assets/food photos/food_26.jpg";
import food_27 from "./assets/food photos/food_27.jpg";
import food_28 from "./assets/food photos/food_28.jpg";
import food_29 from "./assets/food photos/food_29.jpg";
import food_30 from "./assets/food photos/food_30.jpg";

const images = [
    food_1, food_2, food_3, food_4, food_5,
    food_6, food_7, food_8, food_9, food_10,
    food_11, food_12, food_13, food_14, food_15,
    food_16, food_17, food_18, food_19, food_20,
    food_21, food_22, food_23, food_24, food_25,
    food_26, food_27, food_28, food_29, food_30,
]

export const GlobalContext = createContext<AppContext>({
    global: { currentPage: "login", server: "http://localhost:5500", images },
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
    const [global, setGlobal] = useState<AppData>({ currentPage: "login", server: "http://localhost:5500", images });

    return (
        <GlobalContext.Provider value={{ global, setGlobal }}>
            <NavBar rightNav={global.userID !== undefined} />
            <PageSwitcher page={global.currentPage} />
        </GlobalContext.Provider>
    );
}

export default App;