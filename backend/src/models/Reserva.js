import mongoose from 'mongoose';

const { Schema } = mongoose;

const reservaSchema = new Schema({
  conferencista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker',
    required: true
  },
  auditorio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auditorio',
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

reservaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Reserva = mongoose.model('Reserva', reservaSchema);
export default Reserva; 
