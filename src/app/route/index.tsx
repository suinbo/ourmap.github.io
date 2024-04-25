import Pages from "@/pages"
import { HashRouter as Router, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pages.Home />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter