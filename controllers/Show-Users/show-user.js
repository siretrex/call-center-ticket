import emp from "../../models/user.js";

export const showUser = async (req, res) => {
  try {
    const userData = await emp.find();

    const filteredUser = userData.map(item => ({ username: item.username, _id: item._id }));

    res.status(200).json({ message: "Done", data: filteredUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};
