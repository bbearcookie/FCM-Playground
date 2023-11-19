import { getFCMToken } from './services/getFCMToken';
import './App.css';

if ('permissions' in navigator) {
  navigator.permissions.query({ name: 'notifications' }).then(function (notificationPerm) {
    notificationPerm.onchange = async function () {
      console.log('권한 변경 감지:', notificationPerm.state);

      if (notificationPerm.state === 'granted') {
        // const token = await getFCMToken();
        // console.log(token);
      }
    };
  });
}

function App() {
  // const handlePermission = async () => {
  //   const permission = await Notification.requestPermission();

  //   if (permission !== 'granted') {
  //     alert('브라우저 설정에서 직접 알림 권한을 허용해주세요.');
  //   }
  // };

  const handleGetToken = async () => {
    try {
      const token = await getFCMToken();
      console.log(token);
    } catch (err) {
      alert('브라우저 설정에서 직접 알림 권한을 허용해주세요.');
    }
  };

  return (
    <>
      {/* <button onClick={handlePermission}>Permission 요청</button> */}
      <button onClick={handleGetToken}>토큰 GET</button>
    </>
  );
}

export default App;
