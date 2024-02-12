// fetch all the images from the cloudinary database
// import cloudinary from 'cloudinary';
export default async function handler(req, res) {
  // const images = await cloudinary.v2.search
  // .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
  // .sort_by("public_id", "asc")
  // .max_results(400)
  // .execute();
  res.status(200).json({ text: 'Hello' });;
}
