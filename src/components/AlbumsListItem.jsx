import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./photoList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    return removeAlbum(album);
  };

  const header = (
    <>
      <Button loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
