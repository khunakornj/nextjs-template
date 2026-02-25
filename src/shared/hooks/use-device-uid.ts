import { useLocalStorage } from '@mantine/hooks';

import { uuidV7 } from '../common/utils';

export function useDeviceUid() {
  const [deviceUid, setDeviceUid] = useLocalStorage({
    key: 'x-device',
    defaultValue: '',
  });

  let localDeviceUid = deviceUid;
  if (!localDeviceUid) {
    localDeviceUid = uuidV7();
    if (typeof window === undefined) {
      setDeviceUid(localDeviceUid);
    }
  }

  return localDeviceUid;
}
