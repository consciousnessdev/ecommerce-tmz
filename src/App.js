import { Routes, Route, useLocation, useParams, useNavigate, Link } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component';


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  )
};

const TopicsList = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <h1>TOPICS PAGE</h1>
      <Link to={`${pathname}/13`}>To 13</Link>
      <Link to={`${pathname}/42`}>To 42</Link>
      <Link to={`${pathname}/98`}>To 98</Link>
    </div>
  );
};

const TopicDetail = () => {
  const { topicId } = useParams();
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blog/asdqw/topics" element={<TopicsList />} />
        <Route path="/blog/asdqw/topics/:topicId" element={<TopicDetail />} />
        <Route path="/blog/topics" element={<TopicsList />} />
        <Route path="/blog/topics/:topicId" element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
