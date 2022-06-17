
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { Routes, Route } from "react-router";
import TeamController from "../Components/Team/TeamController";
import SelectPlayerController from "../Components/Player/SelectPlayerController";
import { HomePage } from "./HomePage/HomePage";
import { PlayersPage } from "./PlayersPage/PlayersPage";
import { TeamsPage } from "./TeamsPage/TeamsPage";
import { GamesPage } from "./GamesPage/GamesPage";

const RoutesMap = () => {
  let navigate = useNavigate ();
  const [tab, setTab] = useState(0);
  return (
    <div style={{ minHeight: "100vh", width: " 100vw", dislay: "flex", justifyContent: "center", overflow:"hidden" }} className="MainLayout">
      <div className="NavBar" style={{ width: "100%", display: "flex", padding: "1rem", justifyContent:"center" }}>
        <div style={{fontSize:"1.5rem", fontWeight:"900", cursor: "pointer", padding: "2rem", position: "absolute", top:"1rem", left: "1rem" }} onClick={() => {
            setTab(0);
            navigate("../", { replace: true })
          }}>My App</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", alignSelf: "center", padding: "2rem", borderRadius: "4rem" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: "900", cursor: "pointer", color:`${tab === 1 ? 'blue': 'black'} ` }} onClick={() => {
            setTab(1);
            navigate("../players", { replace: true })
          }}>Players</div>
          <div style={{fontSize:"1.5rem", fontWeight:"900", cursor: "pointer", color:`${tab === 2 ? 'blue': 'black'} ` }} onClick={() => {
            setTab(2);
            navigate("../teams", { replace: true })
          }}>Teams</div>
          <div style={{fontSize:"1.5rem", fontWeight:"900", cursor: "pointer", color:`${tab === 3 ? 'blue': 'black'} ` }} onClick={() => {
            setTab(3);
            navigate("../games", { replace: true })
          }}>Games</div>
        </div>
      </div>
      <Routes>
        <Route path="teams" element={<TeamsPage/>} />
        <Route path="games" element={<GamesPage/>} />
        <Route path="players" element={<PlayersPage/>} />
        <Route path="" element={<HomePage/>} />
      </Routes>
    </div>
  );
};

export default RoutesMap;
