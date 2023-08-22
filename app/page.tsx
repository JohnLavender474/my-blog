import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>            
      <h1 style={{fontSize: "40px", textDecoration: "underline" }}>POSTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">        
        {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;
