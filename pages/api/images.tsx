// fetch all the images from the cloudinary database
import cloudinary from '../../utils/cloudinary';
export default async function handler(req, res) {
  const images = await cloudinary.v2.search
  .expression(`folder:libwater/*`)
  .sort_by("public_id", "asc")
  .max_results(400)
  .execute();
  res.status(200).json(images);;
}
