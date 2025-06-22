const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p className="text-gray-400 text-sm">© Invelex 2025</p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            YouTube
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Spotify
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
