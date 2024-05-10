import { createContext, useEffect, useState } from "react"
import Header from "./components/Header"
import Tweets from "./components/Tweets"
import RightSide from "./components/RightSide"
import defaultTweets from "./assets/data/tweets.js"
import user from "./assets/data/user.js"

export const StateContext = createContext()
const loadedTheme = localStorage.getItem("theme")
export const ThemeContext = createContext(loadedTheme)

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(loadedTheme || "light")

    useEffect(() => {
        theme === "light"
            ? (document.body.style.backgroundColor = "white")
            : (document.body.style.backgroundColor = "black")
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            <StateContext.Provider
                value={{ tweets, setTweets, user }}
            >
                <div className="container">
                    <Header />
                    <Tweets />
                    <RightSide />
                </div>
            </StateContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App }
