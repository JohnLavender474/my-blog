import PostPreview from "./PostPreview";
import getPostMetadata from "./getPostMetadata";

export const getPostPreviews = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return postPreviews
}