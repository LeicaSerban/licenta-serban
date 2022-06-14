import GameController from "../../Components/Game/GameController";

export const GamesPage = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", alignItems: "center", marginTop: "7rem" }}>
            <GameController/>  
        </div>
    );
}