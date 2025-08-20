import ticket from "../models/ticket.js"; 

export const ticketHandler = async (req, res) => {
  const { caller_id, handler_id, issue } = req.body;

  if (!caller_id || !handler_id || !issue) {
    return res.status(400).json({ message: "Data not found" });
  }

  try {
    const ticketInstance = new ticket({
      caller_id,
      handler_id,
      issue,
      ticket_number: generateCode()
    });

    await ticketInstance.save();
    return res.status(200).json({ message: "Ticket raised successfully", data: ticketInstance });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Network issue" });
  }
};

function generateCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const startLetter = letters[Math.floor(Math.random() * letters.length)];
  const endLetter = letters[Math.floor(Math.random() * letters.length)];
  const number = Math.floor(100000 + Math.random() * 900000);

  return startLetter + number + endLetter;
}

