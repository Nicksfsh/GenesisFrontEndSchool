import Home from "./pages/Home"
import CourseInfopage from "./pages/CourseInfopage"
import './App.css'
import {Routes, Route, Outlet, Link} from "react-router-dom"
import Layout from "./pages/Layout"

function App() {

    return (
        <div className="App">
            <div>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="courseinfopage/:courseId" element={<CourseInfopage/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Route>
                </Routes>
            </div>

        </div>
    )
}

export default App
