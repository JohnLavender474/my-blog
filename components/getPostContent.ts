import matter from "gray-matter";
import fs from "fs";

export const getPostContent = (slug: string) => {
  const file = `posts/${slug}.md`;
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, "utf8");
  return matter(content);
};
