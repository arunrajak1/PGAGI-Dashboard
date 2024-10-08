import './App.css';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Assistants from './components/sidebarItems/Assistants';
import PhoneNumbers from './components/sidebarItems/PhoneNumbers';
import Files from './components/sidebarItems/Files';
import Tools from './components/sidebarItems/Tools';
import Blocks from './components/sidebarItems/Blocks';
import Squads from './components/sidebarItems/Squads';
import VoiceLibrary from './components/sidebarItems/VoiceLibrary';
import CallLogs from './components/sidebarItems/CallLogs';
import Overview from './components/sidebarItems/Overview';

function App() {
  return (
    <div className="bg-gray-900">
        <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Assistants />} />
          <Route path="assistants" element={<Assistants />} />
          <Route path="phone-numbers" element={<PhoneNumbers />} />
          <Route path="files" element={<Files />} />
          <Route path="tools" element={<Tools />} />
          <Route path="blocks" element={<Blocks />} />
          <Route path="squads" element={<Squads />} />
          <Route path="voice-library" element={<VoiceLibrary />} />
          <Route path="call-logs" element={<CallLogs />} />
          <Route path="overview" element={<Overview />} />
          <Route path="*" element={<Squads />} />
        </Route>
        </Routes>
    </div>
  );
}

export default App;
