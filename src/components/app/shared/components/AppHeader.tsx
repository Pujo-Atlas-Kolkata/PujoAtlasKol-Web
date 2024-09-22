import { IoMdSettings } from 'react-icons/io';

export default function AppHeader() {
  const handleClick = () => {
    document.dispatchEvent(new CustomEvent('toggleFlyout'));
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className="font-work text-4xl font-medium text-left py-4">Pujo Atlas</h2>

      <button className="settings-button" onClick={handleClick}>
        <IoMdSettings size="30" className="mb-1" />
      </button>
    </div>
  );
}
