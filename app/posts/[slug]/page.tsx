import PostContent from "../../../components/PostContent";
import getPostMetadata from "../../../components/getPostMetadata";
import moment from "moment";
import { getPostContent } from "../../../components/getPostContent";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    section: post.section,
    slug: post.slug,
  }));
};

const PostPage = async (props: any) => {
  const { slug } = await props.params;
  const post = getPostContent(slug);
  if (!post) notFound();

  return (
    <div>
      <Link href="/" className="post-back-link">Go back to home</Link>
      <div className="post-header">
        <h1 className="post-section-label">{post.data.section}</h1>
        <h1 className="post-title">{post.data.title}</h1>
        <p className="post-date">{moment(post.data.date).format("MM-DD-YYYY")}</p>
      </div>
      <article className="prose prose-lg max-w-none">
        <PostContent content={post.content} />
      </article>
    </div>
  );
};

export default PostPage;
