
import BlogList from "./BlogList";
import useFetch from './useFetch.js';

const Home = () => {
  
  const {data:blogs , isPending , error} = useFetch("http://localhost:8000/blogs");
  // here, we want bloglist to only render when blogs get the data,otherwise it will throw an error, i.e. cannot apply map function on a null object. Therfore, To avoid that, we are using && operator here. Same logic in error and isPending.
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">...loading</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
