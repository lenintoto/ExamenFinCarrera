import mongoose from 'mongoose';

const { Schema } = mongoose;

const clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  ciudad: {
    type: String,
    trim: true
  },
  direccion: {
    type: String,
    trim: true
  },
  telefono: {
    type: Number,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  fecha_nacimiento: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

clienteSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;
