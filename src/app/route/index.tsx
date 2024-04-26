import Pages from "@/pages"
import { HashRouter as Router, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/auth" element={<Pages.Auth />} />
                <Route path="/maps" element={<Pages.Maps />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
