import SideBar from './components/SideBar';
import ChannelSection from './components/ChannelSection';
import ChatSection from './components/ChatSection';

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <ChannelSection />
      <ChatSection />
    </div>
  );
}

export default App;
