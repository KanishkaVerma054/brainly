import BrainIcon from "./icons/BrainIcon";
import SidebarItem from "./SidebarItem";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import DocumentIcon from "./icons/DocumentIcon";
import LinksIcon from "./icons/LinksIcon";
import TagsIcon from "./icons/TagsIcon";

const Sidebar = () => {
  return (
    <div className="w-96 h-screen border-r-2">
      <div className="flex mt-4 ml-3">
        <BrainIcon />
        <h1 className="font-bold pl-2 pt-1 text-2xl">Second Brain</h1>
      </div>
      <div className="pt-8 pl-4 flex flex-col space-y-3">
        <SidebarItem text="Tweets" icon={<TwitterIcon/>}/>
        <SidebarItem text="Videos" icon={<YoutubeIcon/>}/>
        <SidebarItem text="Documents" icon={<DocumentIcon/>}/>
        <SidebarItem text="Links" icon={<LinksIcon/>}/>
        <SidebarItem text="Tags" icon={<TagsIcon/>}/>
      </div>
    </div>
  );
};

export default Sidebar;
