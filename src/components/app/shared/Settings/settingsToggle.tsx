import { useStore } from '@nanostores/react';
import { isSettingsOpen } from './settingStore';

export default function SettingsBtn() {
  const $isSettingOpen = useStore(isSettingsOpen);

  return <button onClick={() => isSettingsOpen.set(!$isSettingOpen)}>Setting</button>;
}
