import RankingList from "./components/ranking-list";

function App() {

  const styles = {
    container: {
      backgroundColor: 'indigo',
      minHeight: '100vh'
    },
    header: {
      padding: 16,
      textAlign: 'center',
      margin: 0
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BGS BRAWLER</h1>
      <RankingList />
    </div>
  );
}

export default App;
