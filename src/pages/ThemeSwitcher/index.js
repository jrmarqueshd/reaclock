import React from "react";

import { IoIosContrast } from "react-icons/io";

export default function ThemeSwitcher({ toggleTheme }) {
    return (
        <IoIosContrast
            style={{
                position: "absolute",
                top: 5,
                left: 5,
                color: "#e61919",
                fontSize: 40
            }}
            onClick={toggleTheme}
        />
    );
}
