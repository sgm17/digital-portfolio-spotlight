
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app this would come from an API
  const blogPosts = {
    '1': {
      title: 'Building Scalable Flutter Applications',
      content: `
        <p>Flutter has revolutionized mobile app development by providing a single codebase that works across multiple platforms. In this comprehensive guide, we'll explore the best practices for creating Flutter applications that can handle millions of users.</p>
        
        <h2>Architecture Patterns</h2>
        <p>When building scalable Flutter applications, choosing the right architecture pattern is crucial. We recommend using either BLoC (Business Logic Component) or Provider pattern for state management, depending on your application's complexity.</p>
        
        <h2>Performance Optimization</h2>
        <p>Performance is key when scaling applications. Here are some essential tips:</p>
        <ul>
          <li>Use const constructors wherever possible</li>
          <li>Implement proper widget recycling</li>
          <li>Optimize image loading and caching</li>
          <li>Minimize rebuild operations</li>
        </ul>
        
        <h2>Testing Strategy</h2>
        <p>A robust testing strategy ensures your application remains stable as it scales. Implement unit tests, widget tests, and integration tests to cover all aspects of your application.</p>
        
        <p>By following these principles, you'll be well on your way to building Flutter applications that can handle millions of users while maintaining excellent performance and user experience.</p>
      `,
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      author: 'Alex Rodriguez'
    },
    '2': {
      title: 'The Future of Social Networking',
      content: `
        <p>Social networking platforms are evolving rapidly, driven by emerging technologies and changing user expectations. In this article, we explore the trends and technologies that will shape the next generation of social platforms.</p>
        
        <h2>Decentralization and Web3</h2>
        <p>The future of social networking is likely to be more decentralized, giving users greater control over their data and digital identity. Blockchain technology and Web3 protocols are paving the way for this transformation.</p>
        
        <h2>AI-Powered Personalization</h2>
        <p>Artificial intelligence is becoming increasingly sophisticated at understanding user preferences and delivering personalized content experiences that feel natural and engaging.</p>
        
        <h2>Privacy-First Design</h2>
        <p>With growing concerns about data privacy, future social platforms will need to prioritize user privacy while still delivering engaging experiences.</p>
        
        <p>The social networking landscape is set for significant transformation, and companies that adapt to these changes will lead the next generation of digital communication.</p>
      `,
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Technology',
      author: 'Sarah Chen'
    },
    '3': {
      title: 'Monetization Strategies for Mobile Apps',
      content: `
        <p>Successfully monetizing mobile applications requires a deep understanding of your audience and the right strategy for your app type. This comprehensive guide covers various revenue models and implementation strategies.</p>
        
        <h2>Freemium Model</h2>
        <p>The freemium model allows users to access basic features for free while charging for premium functionality. This approach works well for productivity apps and games.</p>
        
        <h2>Subscription Services</h2>
        <p>Subscription models provide predictable recurring revenue and work especially well for content-based apps and SaaS products.</p>
        
        <h2>In-App Advertising</h2>
        <p>Advertising can be an effective monetization strategy when implemented thoughtfully. Consider banner ads, interstitials, and rewarded video ads based on your user experience.</p>
        
        <h2>In-App Purchases</h2>
        <p>Virtual goods and premium features can generate significant revenue, particularly in gaming and entertainment apps.</p>
        
        <p>The key to successful monetization is understanding your users and providing value that they're willing to pay for.</p>
      `,
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Business',
      author: 'Michael Johnson'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-20 px-6">
          <div className="max-w-4xl mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20 px-6">
        <article className="max-w-4xl mx-auto py-16">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-blue-400 text-sm font-medium">{post.category}</span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
            <p className="text-gray-400">By {post.author}</p>
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
