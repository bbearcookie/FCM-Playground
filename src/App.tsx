import Debounce from './utils/Debounce';
import { getFCMToken } from './utils/firebase';
import './App.css';

const debounce = new Debounce();

function App() {
  const handleGetToken = async () => {
    try {
      const permission = await Notification.requestPermission();

      if (permission !== 'granted') {
        return alert('브라우저 설정에서 직접 알림 권한을 허용해주세요.');
      }

      debounce.run(async () => {
        const token = await getFCMToken();
        console.log(token);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={handleGetToken}>토큰 GET</button>
    </>
  );
}

export default App;
