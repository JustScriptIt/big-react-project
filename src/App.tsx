import "./styles/index.scss"
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {hovered: true, active: true}, [theme])}>
            <button onClick={toggleTheme}>Switch Theme</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />}/>
                    <Route path="/about" element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
