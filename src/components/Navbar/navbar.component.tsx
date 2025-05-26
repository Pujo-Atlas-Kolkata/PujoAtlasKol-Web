export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md rounded-3xl border-2 border-gray-500 bg-white/80 py-4 shadow backdrop-blur-lg md:top-6 lg:max-w-screen-lg">
      <div className="flex h-10 flex-row items-center justify-between px-8">
        <p className="cursor-pointer text-xl font-bold">Pujo Atlas</p>

        <div className="flex flex-row items-center gap-4 text-lg font-medium">
          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Features
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Team
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Sponsors
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Support
          </p>
        </div>
      </div>
    </header>
  );
};
