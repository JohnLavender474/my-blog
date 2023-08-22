import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../components/getPostMetadata";
import moment from "moment";
import { getPostContent } from "../../../components/getPostContent";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>      
      <div className="my-12 text-center">        
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{moment(post.data.date).format("MM-DD-YYYY")}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
