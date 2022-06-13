
import { Routes, Route } from "react-router";
import TeamController from "./Team/TeamController";
import SelectPlayerController from "./Player/SelectPlayerController";
import PlayerController from "./Player/PlayerController";


const RoutesMap = () => {
  return (
    <Routes>
      <Route path="teams" element={<TeamController/>} />
      <Route path="players" element={<SelectPlayerController/>} />
    </Routes>
  );
};

export default RoutesMap;
