export default interface ItemThumbnail {
  id: string;
  name?: string;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
