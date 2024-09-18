import { IoSearch } from 'react-icons/io5';

type Props = {
  location: string;
};

export const SearchBar = ({ location }: Props) => {
  return (
    <div
      id="searchbar"
      className="rounded-3xl mb-2 pl-2 flex flex-row items-center justify-start bg-[#e6dfcf]"
    >
      <IoSearch size="25" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder={`Search for ${location}`}
        className="w-full px-3 py-3 text-sm font-sans bg-[#e6dfcf] font-normal rounded-3xl focus:outline-none text0black"
      />
    </div>
  );
};
