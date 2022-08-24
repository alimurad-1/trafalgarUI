import { BlogCard } from "./BlogCard";
import "./Blog.css";
import Image1 from "../assets/Blog1.jpg";
import Image2 from "../assets/Blog2.jpg";
import Image3 from "../assets/Blog3.jpg";



const Blog = () => {
  const blogCard = [
     {
      blogImg: Image1,
      blogHeader: "Disease detection, check up in the laboratory",
      blogText:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
     {
      blogImg: Image2,
      blogHeader: "Herbal medicines that are safe for consumption",
      blogText:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
     {
      blogImg: Image3,
      blogHeader: "Natural care for healthy facial skin",
      blogText:
        "A healthy lifestyle should start from now and also for your skin health.There are some...",
    },
  ];
  return (
    <section className="blog-section" id="blog-section">
      <div className="blog-header">
        <h1>Check out our latest article</h1>
      </div>
      <div className="blog-card-container">
        {(blogCard).map((anObjectMapped, index) => (
          <BlogCard
            key={index}
            image={anObjectMapped.blogImg}
            header={anObjectMapped.blogHeader}
            text={anObjectMapped.blogText}
          />
        ))}
      </div>
      <div className="blog-button-container">
        <button className="blog-button">View all</button>
      </div>
    </section>
  );
};

export default Blog;
