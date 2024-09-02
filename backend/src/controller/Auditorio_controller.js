import Auditorio from '../models/Auditorio.js';

// Crear un nuevo auditorio 
export const crearAuditorio = async (req, res) => {
  try {
    const { nombre, capacidad, ubicacion, descripcion } = req.body;
    const auditorioExistente = await Auditorio.findOne({ nombre });
    if (auditorioExistente) return res.status(400).json({ message: 'Auditorio ya existe' });

    const auditorio = new Auditorio({ nombre, capacidad, ubicacion, descripcion });
    await auditorio.save();
    res.status(201).json({ message: 'Auditorio creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los auditorios
export const obtenerTodosAuditorios = async (req, res) => {
  try {
    const auditorios = await Auditorio.find();
    res.json(auditorios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un auditorio por ID
export const obtenerAuditorioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const auditorio = await Auditorio.findById(id);
    if (!auditorio) return res.status(404).json({ message: 'Auditorio no encontrado' });

    res.json(auditorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un auditorio por ID
export const actualizarAuditorio = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, capacidad, ubicacion, descripcion } = req.body;

    const auditorio = await Auditorio.findByIdAndUpdate(id, { nombre, capacidad, ubicacion, descripcion }, { new: true });
    if (!auditorio) return res.status(404).json({ message: 'Auditorio no encontrado' });

    res.json(auditorio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un auditorio por ID
export const eliminarAuditorio = async (req, res) => {
  try {
    const { id } = req.params;
    const auditorio = await Auditorio.findByIdAndDelete(id);
    if (!auditorio) return res.status(404).json({ message: 'Auditorio no encontrado' });

    res.json({ message: 'Auditorio eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 