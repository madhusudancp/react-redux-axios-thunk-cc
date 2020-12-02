import './App.css';
import PostsList from './containers/PostsList';
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
    <div className="App">
      REACT-REDUX-CC-THUNK-AXIOS
      <UsersContainer></UsersContainer>
      <PostsList></PostsList>
    </div>
  );
}

export default App;
