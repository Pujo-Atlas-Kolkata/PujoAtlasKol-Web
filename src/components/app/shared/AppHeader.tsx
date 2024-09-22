import { IoMdSettings } from 'react-icons/io';

export default function AppHeader() {
  const handleClick = () => {
    document.dispatchEvent(new CustomEvent('toggleFlyout'));
  };

  return (
    <div className="flex flex-row items-center justify-between p-3 mt-5">
      <h2 className="font-work text-4xl font-medium text-left">Pujo Atlas</h2>

      <button className="settings-button" onClick={handleClick}>
        <IoMdSettings size="30" className="mb-1" />
      </button>
    </div>
  );
}
