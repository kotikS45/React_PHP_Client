// import './App.css'
import {CategoryList} from "./components/Category/CategoryList.tsx";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import AdminLayout from "./components/containers/admin/AdminLayout.tsx";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLayout/>}>
                    <Route index element={<CategoryList/>}/>
                    {/*<Route path="users" element={<UsersTasks />} />*/}
                    {/*<Route path="tasks" element={<TasksPage />} />*/}
                </Route>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default App