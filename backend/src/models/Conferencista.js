import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const speakerSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  cedula: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  especialidad: {
    type: String,
    required: true,
    trim: true
  },
  ciudad: {
    type: String,
    required: true,
    trim: true
  },
  direccion: {
    type: String,
    required: true,
    trim: true
  },
  fecha_nacimiento: {
    type: Date,
    required: true
  },
  telefono: {
    type: String,
    required: false,
    trim: true
  },
  empresa: {
    type: String,
    required: true,
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

speakerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Speaker = mongoose.model('Speaker', speakerSchema);
export default Speaker;
 