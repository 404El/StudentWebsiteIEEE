import NavBar from "./components/Navbar"
import AdvantagePage from "./pages/AdvantagePage"
import BranchMissionPage from "./pages/BranchMissionPage"
import HomePage from "./pages/HomePage"
import StatsPage from "./pages/StatsPage"
import TheStrategyPage from "./pages/TheStrategyPage"
import UpcomingBattles from "./pages/UpcomingBattles"

function App() {
  return (
    <>
      <div>
        <HomePage />
        <BranchMissionPage />
        <StatsPage/>
        <TheStrategyPage/>
        <AdvantagePage/>
        <UpcomingBattles/>

      </div>
      
    </>
  )
}

export default App
