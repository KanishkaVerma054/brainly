import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


const Dashboard = () => {
  return (
    <div className="flex font-sans">
        <Sidebar />
        <Navbar />
      </div>
  )
}

export default Dashboard