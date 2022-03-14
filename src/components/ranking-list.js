import React, {useState, useEffect} from "react"
import { getUsers } from "../services/points-api";

const RankingList = () => {

  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    setRankings(getUsers());
  }, []);

  const displayUserRankings = () => {
      //TODO implement me
      return null;
  }

  return (
    <div>
      {displayUserRankings()}
    </div>
  )
};

export default RankingList;
