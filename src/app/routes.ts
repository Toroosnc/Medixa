import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { BMICalculatorPage } from "./components/pages/BMICalculatorPage";
import { SmartMedicinePage } from "./components/pages/SmartMedicinePage";
import { NearbyHospitalPage } from "./components/pages/NearbyHospitalPage";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { DonationPage } from "./components/pages/DonationPage";
import { AdminDashboard } from "./components/pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "bmi", Component: BMICalculatorPage },
      { path: "medicine", Component: SmartMedicinePage },
      { path: "hospitals", Component: NearbyHospitalPage },
      { path: "donation", Component: DonationPage },
      { path: "admin", Component: AdminDashboard },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
