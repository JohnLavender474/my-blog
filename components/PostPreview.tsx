import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import moment from "moment";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="post-card">
      <p className="post-card-date">{moment(props.date).format("MM-DD-YYYY")}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="post-card-title">{props.title}</h2>
      </Link>
      <p className="post-card-subtitle">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
