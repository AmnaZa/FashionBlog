

function BlogPost({ title, content, imageUrl }) {
  return (
    <article>
      <h3>{title}</h3>
      <div className="content">
        <img src={imageUrl} alt="Blog Post" />
        <p>{content}</p>
      </div>
      <a href="#" className="read-more">Continue...</a>
    </article>
  );
}

export default BlogPost;
