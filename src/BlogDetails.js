import { useParams } from "react-router-dom";
import useFetch from "./useFetch.js";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error, } = useFetch("http://localhost:8000/blogs/" + id);
  const handleDelete = ()=>{
   fetch('http://localhost:8000/blogs/'+id,{
     method:'DELETE'
   }).then(()=>{
     history.push('/')
   })
  }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">...loading</div>}
      {blog && (
        <article className="article">
          <h1 className="blogTitle">{blog.title}</h1>

          <p className="blogBody">{blog.body}</p>
          <p className="blogAuthor">~ {blog.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
