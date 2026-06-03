import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicTracking from './pages/PublicTracking';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicTracking />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/track/:trackingId" element={<PublicTracking />} />
      </Routes>
    </Router>
  );
}

export default App;