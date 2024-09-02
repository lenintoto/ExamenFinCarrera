import mongoose from 'mongoose';

const { Schema } = mongoose;

const auditorioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  capacidad: {
    type: Number,
    required: true
  },
  ubicacion: {
    type: String,
    required: true, 
    trim: true
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

auditorioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Auditorio = mongoose.model('Auditorio', auditorioSchema);
export default Auditorio;
