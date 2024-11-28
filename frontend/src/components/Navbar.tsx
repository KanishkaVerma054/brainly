import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="flex justify-between mt-8 mr-3 ml-8 ">
        <h1 className="font-bold text-2xl p-2">All Notes</h1>
        <div className="flex items-center space-x-2 float-right">
        <Button
          startIcon={<ShareIcon size="lg" />}
          size="md"
          variant="secondary"
          text="Share Brain"
        />
        <Button
          startIcon={<PlusIcon size="lg" />}
          size="md"
          variant="primary"
          text="Add Content"
        />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
