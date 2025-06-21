
import Header from '../components/Header';
import { Spotify, Youtube } from 'lucide-react';

const Podcasts = () => {
  const episodes = [
    {
      guestName: 'Graham Hancock',
      episodeNumber: '#449',
      hostName: 'Lex Fridman',
      title: 'Lost Civilization of the Ice Age & Ancient Human History',
      date: 'October 17, 2024',
      guestImage: '/lovable-uploads/a65afb4d-cc7e-489a-ae75-382e4cdb61ee.png',
      spotify: '#',
      youtube: '#'
    },
    {
      guestName: 'Graham Hancock',
      episodeNumber: '#449',
      hostName: 'Lex Fridman',
      title: 'Lost Civilization of the Ice Age & Ancient Human History',
      date: 'October 17, 2024',
      guestImage: '/lovable-uploads/a65afb4d-cc7e-489a-ae75-382e4cdb61ee.png',
      spotify: '#',
      youtube: '#'
    },
    {
      guestName: 'Graham Hancock',
      episodeNumber: '#449',
      hostName: 'Lex Fridman',
      title: 'Lost Civilization of the Ice Age & Ancient Human History',
      date: 'October 17, 2024',
      guestImage: '/lovable-uploads/a65afb4d-cc7e-489a-ae75-382e4cdb61ee.png',
      spotify: '#',
      youtube: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-4xl font-bold mb-4">Podcasts</h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                The main topic of the podcast is technology. Together, with brilliant guests, we will discuss the innovations their companies are working on and the next steps in the world of technology.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Spotify className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={episode.guestImage} 
                    alt={episode.guestName}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="text-white font-bold text-2xl mb-1">{episode.guestName}</div>
                    <div className="text-green-400 font-bold text-lg">{episode.episodeNumber}</div>
                    <div className="text-blue-400 font-medium">{episode.hostName}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-3 leading-tight">{episode.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{episode.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="mt-24 py-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-gray-400">© Invelex 2024</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Youtube</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Spotify</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Podcasts;
