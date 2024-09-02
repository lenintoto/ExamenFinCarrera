import mongoose from 'mongoose';

const { Schema } = mongoose;

const rentaSchema = new Schema({
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
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

rentaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Renta = mongoose.model('Renta', rentaSchema);
export default Renta; 
