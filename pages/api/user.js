import User from "../../models/User";
import connectDb from "../../utils/connectMongoDb";

const handler = async (req, res) => {
  await connectDb();

  // delete , put ,get ,post

  const method = req.method;
  console.log(method);

  if (method === "GET") {
    const users = await User.find();

    return res.status(200).json(users);
  }

  if (method === "POST") {
    const { email, username } = req.body;

    const newUser = new User({
      email,
      username: username,
    });

    const newUserDb = await newUser.save();

    return res.status(201).json(newUserDb);
  }
};

export default handler;
