"use client";
import { ThemeContext } from "@/context/toggletheme";
import Link from "next/link";


export default function Login() {
    const { isDarkTheme, toggleThme } = ThemeContext();
    return (
        <>
            <h1
            style={{
                backgroundColor: isDarkTheme ?
                  "black" :
                  "white",
                color: isDarkTheme ?
                  "white" :
                  "black",
              }}
            >Login Page</h1>
            <Link href={"/"}>Home</Link>
            <button onClick={toggleThme}>Change Theme</button>
        </>
    )
}