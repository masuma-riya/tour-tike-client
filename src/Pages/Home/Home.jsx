import { useLoaderData } from "react-router-dom";
import Spot from "./Spot/Spot";

const Home = () => {
    const spots = useLoaderData();
    const sixSpots = spots.slice(0, 6);
    return (
        <div className="grid grid-cols-3">
            {
            sixSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot> )
            }
        </div>
    );
};

export default Home;