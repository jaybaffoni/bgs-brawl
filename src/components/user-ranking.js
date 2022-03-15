import React, {useState, useEffect} from "react"

const UserRanking = ({data, rank}) => {

    let {id, name, userName, points, weight} = data;

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            padding: 8,
            borderTop: '1px solid grey'
        },
        innerContainer: {
            padding: 4
        },
        nameContainer: {
            display: 'flex',
            padding: 4,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        name: {
            fontWeight: 'bold'
        },
        userName: {
            fontStyle: 'italic'
        },
        smallText: {
            fontSize: 12,
            width: '100%',
            textAlign: 'center'
        },
        medal: {
            width: 44,
            height: 44,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: 'gold',
            borderRadius: '50%',
        },
        rank: {
            fontSize: 18,
            color: 'black'
        },
        pointsContainer: {
            width: 44,
            height: 44,
            display: 'grid',
            placeItems: 'center',
            borderRadius: '50%',
        },
        points: {
            fontSize: 18,
        }
    }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <p style={styles.smallText}>Rank</p>
        <div style={styles.medal}>
            <p style={styles.rank}>{rank}</p>
        </div>
      </div>
      <div style={styles.nameContainer}>
          <div>
              <p style={styles.name}>{name}</p>
              <p style={styles.userName}>{userName}</p>
          </div>
      </div>
      <div style={styles.innerContainer}>
        <p style={styles.smallText}>Points</p>
        <div style={styles.pointsContainer}>
            <p style={styles.points}>{points}</p>
        </div>
      </div>
    </div>
  )
};

export default UserRanking;
