import Reserva from '../models/Reserva.js';
import Auditorio from '../models/Auditorio.js';

// Crear una nueva reserva
export const crearReserva = async (req, res) => {
  try {
    const { conferencista, auditorioId, fecha } = req.body; 

    // Verificar si el auditorio existe por ID
    const auditorio = await Auditorio.findById(auditorioId);
    if (!auditorio) return res.status(404).json({ message: 'Auditorio no encontrado' });

    // Verificar si ya existe una reserva para esa fecha
    const reservaExistente = await Reserva.findOne({ auditorio: auditorioId, fecha });
    if (reservaExistente) return res.status(400).json({ message: 'Auditorio ya reservado para esta fecha' });

    const reserva = new Reserva({
      conferencista,
      auditorio: auditorioId,
      fecha
    });

    await reserva.save();
    res.status(201).json({ message: 'Reserva creada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas
export const obtenerTodasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate('conferencista auditorio');
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una reserva por ID
export const obtenerReservaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const reserva = await Reserva.findById(id).populate('conferencista auditorio');
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una reserva por ID
export const actualizarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { conferencista, auditorioId, fecha } = req.body;

    // Verificar si el auditorio existe por ID
    const auditorio = await Auditorio.findById(auditorioId);
    if (!auditorio) return res.status(404).json({ message: 'Auditorio no encontrado' });

    // Verificar si ya existe una reserva para esa fecha
    const reservaExistente = await Reserva.findOne({ auditorio: auditorioId, fecha, _id: { $ne: id } });
    if (reservaExistente) return res.status(400).json({ message: 'Auditorio ya reservado para esta fecha' });

    const reserva = await Reserva.findByIdAndUpdate(id, { conferencista, auditorio: auditorioId, fecha }, { new: true });
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una reserva por ID
export const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByIdAndDelete(id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    res.json({ message: 'Reserva eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 
