import AboutMe from "../components/AboutMe";
import CollapsibleSection from "../components/CollapsibleSection";
import { getMappedPostMetadata }from "../components/getPostMetadata";
import { PostMetadata } from "../components/PostMetadata";
import PostPreview from "../components/PostPreview";

const convertMetadataToPreview = (metadata?: PostMetadata[]) => metadata?.map((post) => (
  <PostPreview key={post.slug} {...post} />
));

// <h1 style={{fontSize: "40px", textDecoration: "underline" }}>{section}</h1> 

const getPreviewsFor = (section: string, mappedPostMetadata: Map<string, PostMetadata[]>) => (
  <>
    
    <CollapsibleSection title={section}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">        
        {
          convertMetadataToPreview(mappedPostMetadata.get(section))
        }
      </div>
    </CollapsibleSection>
  </>
)

const HomePage = () => {
  const mappedPostMetadata = getMappedPostMetadata();    
  const sections = ["Experience", "Education", "Projects"];
  return (
    <div>      
      {
        sections.map((section) => getPreviewsFor(section, mappedPostMetadata))
      }
      <AboutMe/>
    </div>    
  );
};

export default HomePage;
