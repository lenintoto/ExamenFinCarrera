import Vehiculo from '../models/Vehiculo.js';

// Registrar un nuevo conferencista
export const CrearVehiculo = async (req, res) => {
  try {
    const { marca, modelo, anio_fabricacion, placa, color, tipo, kilometraje, descripcion } = req.body;
    const vehiculoExistente = await Vehiculo.findOne({ placa });
    if (vehiculoExistente) return res.status(400).json({ message: 'Vehiculo ya registrado' });

    const vehiculo = new Vehiculo({ marca, modelo, anio_fabricacion, placa, color, tipo, kilometraje, descripcion});
    await vehiculo.save();
    res.status(201).json({ message: 'Vehiculo creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Obtener todos los conferencistas
export const obtenerTodosVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un conferencista por ID
export const obtenerVehiculoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findById(id);
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo no encontrado' });

    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un conferencista por ID
export const actualizarVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, anio_fabricacion, placa, color, tipo, kilometraje, descripcion } = req.body;

    const vehiculo = await Vehiculo.findByIdAndUpdate(id, { marca, modelo, anio_fabricacion, placa, color, tipo, kilometraje, descripcion }, { new: true });
    if (!vehiculo) return res.status(404).json({ message: 'Vehiculo no encontrado' });

    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un conferencista por ID
export const eliminarVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findByIdAndDelete(id);
    if (!vehiculo) return res.status(404).json({ message: 'Conferencista no encontrado' });

    res.json({ message: 'Vehiculo eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 