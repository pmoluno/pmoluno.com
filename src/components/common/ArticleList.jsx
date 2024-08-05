export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="col-md-4 mb-3">
            <img
            src={article.imageUrl}
            alt={article.title}
            className="mb-3"
            style={{ width: "100%", height: "250px", borderRadius: '10px',}}
          />
          <h3 style={{fontSize: '20px'}}>{article.title}</h3>

          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read more  <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      ))}
    </>
  );
}
