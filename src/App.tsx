import { getMessaging, getToken } from 'firebase/messaging';
import firebase from './utils/firebase';
import './App.css';

function App() {
  const handlePermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      alert('Notification permission granted.');
    }
  };

  const handleGetToken = async () => {
    const message = getMessaging(firebase);

    const token = await getToken(message, {
      vapidKey: 'BLuDu-U9wEKSpnHSmnRvoIClAUx7z3Xf_sI6TaJqh-9JSPtJ10DR8WQsFTp4dEngWqLviJcJZvXK_vu-SkI2ppg',
    });

    console.log(token);
  };

  return (
    <>
      <button onClick={handlePermission}>Permission 요청</button>
      <button onClick={handleGetToken}>토큰 GET</button>
    </>
  );
}

export default App;
