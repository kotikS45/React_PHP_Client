// import './App.css'
import CategoriesPage from "./Pages/CategoriesPage.tsx";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import AdminLayout from "./components/containers/admin/AdminLayout.tsx";
import Login from "./Pages/login";
import Register from "./Pages/register";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLayout/>}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route index element={<CategoriesPage/>}/>
                    {/*<Route path="users" element={<UsersTasks />} />*/}
                    {/*<Route path="tasks" element={<TasksPage />} />*/}
                </Route>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default App