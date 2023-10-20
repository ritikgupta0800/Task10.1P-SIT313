

import React,{useState} from 'react';
import './Course.css'; // Import the corresponding CSS file
import axios from "axios";

const FeaturedArticles = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page.

    if (email) {
      axios
        .post("http://localhost:3000/send", {
          email,
        })
        .then((response) => {
          console.log(response.data); // Log the response data
          alert("Message sent successfully");
        })
        .catch((error) => alert("Error while sending: " + error.message));

    } else {
      setMessage("Please enter the email");
    }};
    const articles = [
      {
        name: 'Men are from Mars, Women are from Venus',
        description: '?Men Are from Mars, Women Are from Venus: Get Seriously Involved With The Classic Guide To Surviving ',
        rating: 4.5,
        image: 'https://m.media-amazon.com/images/I/81RfW9mFkEL._SY522_.jpg',
      },
      {
        name: 'Indian Scientists ',
        description: 'The books include simple narratives and colourful illustrations to make this an interesting read and to get kids excited about learning more about science.',
        rating: 4.8,
        image: 'https://m.media-amazon.com/images/I/51uiFSHqYJL._SY445_SX342_.jpg',
      },
      {
        name: 'Build, Do not Talk',
        description: 'These most important situations we face as adults were never discussed with us when we were students. ',
        rating: 4.2,
        image: 'https://m.media-amazon.com/images/I/71dA6xPmp3L._SY522_.jpg',
      },
    ];
    const tutorials = [
      {
        title: 'C# Course',
        description: 'Best For Begginers!',
        link: 'https://www.youtube.com/watch?v=AvWj0LDepLw',
        image: 'https://i.ytimg.com/an_webp/AvWj0LDepLw/mqdefault_6s.webp?du=3000&sqp=CLDtyKkG&rs=AOn4CLCOC9fzcJErQD5y_rx6vzJAP8j8zw', 
      },
      {
        title: 'Descrete Mathematics',
        description: 'Best course for studying maths!',
        link: 'https://www.youtube.com/watch?v=wGLTV8MgLlA&list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg',
        image: 'https://i.ytimg.com/vi/wGLTV8MgLlA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBTq7pt6gl9Y-Ycq2QEAybip3NbEA', 
      },
      {
        title: 'React Tutorial',
        description: 'Learn React by building eight real-world projects and solving 140+ coding challenges.',
        link: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        image: 'https://i.ytimg.com/an_webp/bMknfKXIFA8/mqdefault_6s.webp?du=3000&sqp=CIHiyKkG&rs=AOn4CLB7xpr4hod605TXHbn6LtK_sj0mAg', 
      },
    ];


    return (
      <div className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={article.image}
                alt={article.name}
                className="article-image"
              />
              <h3>{article.name}</h3>
              <p>{article.description}</p>
              <div className="rating">Rating: {article.rating}</div>
            </div>
          ))}
        </div>
        <button className="see-more-button">See More Articles</button>
        <div className="featured-tutorials">
          <h2 className="section-title">Featured Tutorials</h2>
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
        
        
        <div className="tutorial" key={index}>
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="tutorial-image"
                />
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <a
                  href={tutorial.link}
                  className="tutorial-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tutorial
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className="see-more-tutorials">See More Tutorials</button>
  
        <div className="newsletter-signup">
          <h2 className="section-title">Sign Up for the Newsletter</h2>
          <p>Stay updated with the latest articles and tutorials.</p>
          <form className="newsletter-form" onSubmit={sendEmail}>
            <input
              type="email"
              id="email" onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default FeaturedArticles;