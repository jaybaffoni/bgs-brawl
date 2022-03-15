import React, {useState, useEffect} from "react"
import { getUsers } from "../services/points-api";
import UserRanking from "./user-ranking";

const RankingList = () => {

  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    setRankings(getUsers());
  }, []);

  const displayUserRankings = () => rankings.map((rank, i) => 
    <UserRanking 
        key={rank.id} 
        rank={i + 1}
        data={rank} />
    );

  return (
    <div style={{borderBottom: '1px solid grey'}}>
      {displayUserRankings()}
    </div>
  )
};

export default RankingList;
