// import './App.css'
import CategoriesPage from "./Pages/CategoriesPage.tsx";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import AdminLayout from "./components/containers/admin/AdminLayout.tsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLayout/>}>
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