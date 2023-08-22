import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

export const getMappedPostMetadata = (): Map<string, PostMetadata[]> => {
  const map = new Map<string, PostMetadata[]>();
  const data = getPostMetadata();
  
  data.forEach((d) => {
    const section = d.section;
    if (!map.has(section)) {
      map.set(section, []);
    }
    const a = map.get(section);
    a?.push(d);    
  });
  
  return map;
} 

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      section: matterResult.data.section,
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  }).sort((a, b) => a.date > b.date ? -1 : 1);

  return posts;
};

export default getPostMetadata;
