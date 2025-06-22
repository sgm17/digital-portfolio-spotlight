
import Header from '../components/Header';
import { Youtube, Music } from 'lucide-react';

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
              <h1 className="text-5xl font-bold mb-6 text-white">Podcasts</h1>
              <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
                The main topic of the podcast is technology. Together, with brilliant guests, we will discuss the innovations their companies are working on and the next steps in the world of technology.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300"
                title="Watch on YouTube"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300"
                title="Listen on Spotify"
              >
                <Music className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 hover:bg-gray-800/60 transition-colors duration-300 cursor-pointer border border-gray-800/50 rounded-lg overflow-hidden"
                onClick={() => window.open(episode.youtube, '_blank')}
              >
                <div className="flex items-center p-6">
                  {/* Thumbnail */}
                  <div className="w-32 h-20 bg-gray-700 rounded-lg flex-shrink-0 mr-6">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                      <Youtube className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-300 font-medium text-lg">{episode.guestName}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{episode.episodeNumber}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{episode.hostName}</span>
                    </div>
                    
                    <h3 className="text-white text-lg font-medium mb-2 leading-tight truncate">{episode.title}</h3>
                    <p className="text-gray-500 text-sm">{episode.date}</p>
                  </div>
                  
                  {/* Platform icons */}
                  <div className="flex items-center gap-3 ml-6">
                    <Youtube className="w-5 h-5 text-gray-400" />
                    <Music className="w-5 h-5 text-gray-400" />
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">Youtube</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">Spotify</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">TikTok</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Podcasts;
