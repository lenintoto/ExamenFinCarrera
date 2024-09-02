import mongoose from 'mongoose';


const { Schema } = mongoose;

const vehiculoSchema = new Schema({
  marca: {
    type: String,
    required: true,
    trim: true
  },
  modelo: {
    type: String,
    required: true,
    trim: true
  },
  placa: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    required: true,
    trim: true
  },
  kilometraje: {
    type: String,
    required: true,
    trim: true
  },
  anio_fabricacion: {
    type: Date,
    required: true
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

vehiculoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
export default Vehiculo;
 