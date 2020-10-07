// See example at: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose

import { connectToDatabase } from "../../util/mongodb";
// import Pet from "../../../models/Pet";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const { client, db } = await connectToDatabase();

  switch (method) {
    // case "GET" /* Get a model by its ID */:
    //   try {
    //     const pet = await Pet.findById(id);
    //     if (!pet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: pet });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    // case "PUT" /* Edit a model by its ID */:
    //   try {
    //     const pet = await Pet.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //       runValidators: true,
    //     });
    //     if (!pet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: pet });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    // case "DELETE" /* Delete a model by its ID */:
    //   try {
    //     const deletedPet = await Pet.deleteOne({ _id: id });
    //     if (!deletedPet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: {} });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    case "POST":
      try {
        const subscriber = await db
          .collection("newsletterSubscribers")
          .insertOne(req.body);
        res.status(201).json({ success: true, data: subscriber });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
