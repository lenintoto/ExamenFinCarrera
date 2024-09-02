import Renta from '../models/Renta.js';
import Vehiculo from '../models/Vehiculo.js';

// Crear una nueva reserva
export const crearRenta = async (req, res) => {
  try {
    const { vehiculoId, cliente, descripcion, fecha } = req.body; 

    // Verificar si el auditorio existe por ID
    const vehiculo = await Vehiculo.findById(vehiculoId);
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo no encontrado' });

    // Verificar si ya existe una reserva para esa fecha
    const vehiculoExistente = await Renta.findOne({ vehiculo: vehiculoId, fecha});
    if (vehiculoExistente) return res.status(400).json({ message: 'carro ya reservado para esta fecha' });

    const renta = new Renta({
      cliente,
      vehiculo: vehiculoId,
      fecha,
      descripcion
    });

    await renta.save();
    res.status(201).json({ message: 'Renta reservada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas
export const obtenerTodasRentas = async (req, res) => {
  try {
    const renta = await Renta.find()
    res.json(renta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una reserva por ID
export const obtenerRentaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const renta = await Renta.findById(id);
    if (!renta) return res.status(404).json({ message: 'Reserva no encontrada' });

    res.json(renta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una reserva por ID
export const actualizarRenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { vehiculoId, cliente, fecha } = req.body;

    // Verificar si el auditorio existe por ID
    const vehiculo = await Vehiculo.findById(vehiculoId);
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo no encontrado' });

    // Verificar si ya existe una reserva para esa fecha
    const rentaExistente = await Renta.findOne({ vehiculo: vehiculoId, fecha, _id: { $ne: id } });
    if (rentaExistente) return res.status(400).json({ message: 'vehiculo ya reservado para esta fecha' });

    const reserva = await Renta.findByIdAndUpdate(id, { conferencista, auditorio: auditorioId, fecha }, { new: true });
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });

    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una reserva por ID
export const eliminarRenta = async (req, res) => {
  try {
    const { id } = req.params;
    const renta = await Renta.findByIdAndDelete(id);
    if (!renta) return res.status(404).json({ message: 'Vehiculo no encontrada' });

    res.json({ message: 'Reserva eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 
