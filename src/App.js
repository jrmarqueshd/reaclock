import React, { useState, useEffect } from "react";

import { Global } from "./styles/GlobalStyles";

import Clock from "./pages/clock/index";
import ThemeSwitcher from "./pages/ThemeSwitcher/index";
import * as themes from "./styles/themes/index";
import ThemeContext from "./styles/themes/context";

function App() {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(themes.dark);
    }, []);

    function toggleTheme() {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <>
            <Global />
            <ThemeContext.Provider value={theme}>
                <ThemeSwitcher toggleTheme={toggleTheme} />
                <ThemeContext.Consumer>
                    {theme => <Clock theme={theme} />}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
