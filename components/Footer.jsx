import Social from "./Social";

const Footer = () => {
  return (
    <footer className="container min-h-16 flex flex-col lg:flex-row items-center justify-center py-8 lg:py-6 gap-4 lg:gap-8 bg-[#193432cc] shadow-lg">
      <div>
        <div class="text-sm flex flex-col lg:flex-row items-center justify-center lg:gap-2">
          <p>© 2025 D.L.Buddika Kasun.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className="px-8">
        <Social
          containerStyle="flex gap-4 lg:gap-6"
          iconStyle="w-9 h-9 border-[1.5px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 cursor-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
