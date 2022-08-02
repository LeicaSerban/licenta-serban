
import HomeController from '../../Components/Home/HomeController'
import HomeController2 from '../../Components/Home/HomeController2'



export const HomePage = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", alignItems: "center", marginTop:"5rem" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "900", padding: "3rem 1rem" }}>League: Premier League</div>
            <div style={{ display: "flex", width:"80%" }}>
                <div style={{ display: "flex", flex:"1", justifyContent: "center", alignItems:"center", flexDirection:"column", borderRight:"0.3rem solid black" }}>
                    <HomeController />
                </div>
                <div style={{ display: "flex", flex:"1", justifyContent: "center", alignItems:"center", flexDirection:"column" }}>
                    <HomeController2 />
                </div>
            </div>
        </div>
    );
}