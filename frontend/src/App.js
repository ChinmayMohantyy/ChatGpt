import { Route, Routes } from 'react-router-dom';
import Index from './pages/home/container/homeContainerIndex';
import IndexChatPage from './pages/chatPage/indexChatPage';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chat" element={<IndexChatPage />} />
      {/* <Route path="*" element={NotFoundPage} /> */}
    </Routes>
  );
}

export default App;
