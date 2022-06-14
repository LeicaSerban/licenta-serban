import TeamController from "../../Components/Team/TeamController";

export const TeamsPage = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", alignItems: "center", marginTop: "7rem" }}>
            <TeamController/>  
        </div>
    );
}