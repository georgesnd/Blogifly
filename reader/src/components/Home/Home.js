import './Home.css';
import banner from '../../assets/banner.png';
import BlogpostCard from './BlogpostCard/BlogpostCard';

function Home() {
  return (
    <main>
      <img src={banner} />
      <div className='blogpostCard-container'>
      <BlogpostCard />
      <BlogpostCard />
      <BlogpostCard />
      <BlogpostCard />
      <BlogpostCard />
      <BlogpostCard />
      </div>
    </main>
  );
}

export default Home;
