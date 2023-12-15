import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics'
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory'
import friends from './components/json/friends.json'
import data from './components/json/data.json'
import user from './components/json/user.json'
import transactions from './components/json/transactions.json'
function App() {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}
export default App;