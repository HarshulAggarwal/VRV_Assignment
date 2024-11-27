import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import DashboardCharts from "../components/Charts";
import AddClient from "../components/AddClient";
import AllClients from "../components/AllClients";
import Cards from "../components/Cards";
import { useAuth } from '../auth/AuthProvider';


export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
  };
  const { user } = useAuth();

  if (!user) return <p>Please login to access the dashboard.</p>;
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 mt-20 text-white">Dashboard</h2>
            <StatsCards />
            <DashboardCharts />
            <Cards />
          </>
        );
      case "addClient":
        return (
        <>
             <h2 className="text-2xl font-bold mb-4 mt-20 text-white">Add Client</h2>
            <AddClient />
        </>
        
        );
        case "allClients":
        return (
        <>
            <h2 className="text-2xl font-bold mb-4 mt-20 text-white">All Clients</h2>
            <AllClients />
        </>
        
        );
      default:
        return <StatsCards />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onItemClick={handleSidebarItemClick} />
      <div className="w-full p-6 bg-[#000814] min-h-screen">
        
        {renderSection()}
      </div>
    </div>
  );
}


