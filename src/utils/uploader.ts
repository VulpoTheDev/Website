import fs from 'fs';

// Uploads the Image to the Folder
export const uploadImage = async (file: any) => {
  const { createReadStream, filename } = await file;
  const stream = createReadStream();
  const path = `./public/images/blogs/${filename}`;
  await stream.pipe(fs.createWriteStream(path));
  return `/images/blogs/${filename}`;
};
