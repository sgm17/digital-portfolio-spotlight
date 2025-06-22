
import Header from '../components/Header';
import { Music, Youtube } from 'lucide-react';

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
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Podcasts</h1>
              <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
                The main topic of the podcast is technology. Together, with brilliant guests, we will discuss the innovations their companies are working on and the next steps in the world of technology.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="bg-red-600 hover:bg-red-500 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/25"
                title="Watch on YouTube"
              >
                <Youtube className="w-8 h-8 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-500 hover:bg-green-400 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25"
                title="Listen on Spotify"
              >
                <Music className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-800/50">
                {/* Thumbnail placeholder */}
                <div className="w-full aspect-video bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
                      <Youtube className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-white font-bold text-2xl mb-2">{episode.guestName}</div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-400 font-bold text-lg">{episode.episodeNumber}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-blue-400 font-medium">{episode.hostName}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-xl font-semibold mb-4 leading-tight line-clamp-2">{episode.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{episode.date}</p>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={episode.youtube}
                      className="flex-1 bg-red-600 hover:bg-red-500 text-white text-center py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                    >
                      YouTube
                    </a>
                    <a 
                      href={episode.spotify}
                      className="flex-1 bg-green-500 hover:bg-green-400 text-white text-center py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="mt-32 py-12 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-gray-500 text-lg">© Invelex 2024</p>
            <div className="flex items-center gap-10">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-lg font-medium">Youtube</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg font-medium">Spotify</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">TikTok</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Podcasts;
