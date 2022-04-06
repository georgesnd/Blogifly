import './BlogpostCard.css';
import {blogposts} from '../../../mockupdata/blogposts.js';

function BlogpostCard() {
  return (
    blogposts.slice(0, 6).map(({id, title, date, text}) =>
    <div className='blogpostCard' key={id}>
      <div>
        <h3 className='blogpostCard-title'>{title}</h3>

        <p className='blogpostCard-date'>{date}</p>

        <p className='blogpostCard-text'>{text}</p>
      </div>

      <div className='btn-container'>
        <a className='btn-readmore' href='#'>Read full article...</a>
      </div>
    </div>
  ));
}

export default BlogpostCard;
