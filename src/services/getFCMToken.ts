import { getToken } from 'firebase/messaging';
import { message } from '../utils/firebase';

// TODO: 이 함수에 쓰로틀링을 걸어야 함. ex) 반복해서 호출해도 최대 1분에 한 번씩만 실행되도록
export const getFCMToken = async () => {
  return await getToken(message, {
    vapidKey: 'BLuDu-U9wEKSpnHSmnRvoIClAUx7z3Xf_sI6TaJqh-9JSPtJ10DR8WQsFTp4dEngWqLviJcJZvXK_vu-SkI2ppg',
  });
};
