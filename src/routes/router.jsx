import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddHabit from "../pages/Habits/AddHabit";
import MyHabit from "../pages/Habits/MyHabit";
import HabitDetails from "../pages/Habits/HabitDetails";
import UpdateHabit from "../pages/Habits/UpdateHabit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/add-habit", element: <AddHabit /> },
            { path: "/my-habits", element: <MyHabit /> },
            { path: "/habit", element: <HabitDetails /> },
            { path: "/update-habit", element: <UpdateHabit /> },
        ]
    },
]);







export default router;
