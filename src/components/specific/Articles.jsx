import "./Articles.css";
import ArticleList from '../common/ArticleList';
const Articles = () => {
  const articles = [
    {
      title: "Here is why Typescript is a valuable addition to you developer toolkit",
      date: "June 18",
      imageUrl: "/images/1.webp",
      url: "https://medium.com/@pmoluno/here-is-why-typescript-is-a-valuable-addition-to-you-developer-toolkit-5239f4e1a491",
      description: "TypeScript enhances JavaScript by adding static typing, which has been a game-changer...",
    },
    {
      title: "The Real Reason Why There Will Be a Monopoly of AI Models in the Future",
      date: "June 18",
      imageUrl: "/images/2.webp",
      url: "https://medium.com/@pmoluno/the-real-reason-why-there-will-be-a-monopoly-of-ai-models-in-the-future-79facf25edd7",
      description: "Imagine a future where a handful of giant companies control the...",
    },
    {
      title: "Here is why Typescript is a valuable addition to you developer toolkit",
      date: "June 18",
      imageUrl: "/images/1.webp",
      url: "https://medium.com/@pmoluno/here-is-why-typescript-is-a-valuable-addition-to-you-developer-toolkit-5239f4e1a491",
      description: "TypeScript enhances JavaScript by adding static typing, which has been a game-changer...",
    },
  ];

  return (
    <div className="articles container">
      <h2>My Articles</h2>
      <p>
        I write about technology and business. I explore how tech innovations
        drive business growth, improve efficiency, and transform industries,
        while also addressing the challenges companies face in staying ahead of
        the curve.
      </p>
      <div className="row">
        <ArticleList articles={articles}/>
      </div>
    </div>
  );
};

export default Articles;
