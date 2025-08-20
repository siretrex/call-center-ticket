import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  ticket_number: {
    type: String,
    required: true,
    unique: true    
  },
  caller_id: {
    type: String,
    required: true,
  },
  handler_id: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'cancel', 'fulfilled'],
    default: 'pending',
  },
  solution: {
    type: String
  }
}, { timestamps: true });

const ticket = mongoose.model('Ticket', ticketSchema);

export default ticket;
