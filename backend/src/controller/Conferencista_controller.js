import Conferencista from '../models/Conferencista.js';

// Registrar un nuevo conferencista
export const CrearConferencista = async (req, res) => {
  try {
    const { nombre, apellido, cedula, especialidad, ciudad, direccion, fecha_nacimiento, telefono, empresa } = req.body;
    const conferencistaExistente = await Conferencista.findOne({ cedula });
    if (conferencistaExistente) return res.status(400).json({ message: 'Conferencista ya registrado' });

    const conferencista = new Conferencista({ nombre, apellido, cedula, especialidad, ciudad, direccion, fecha_nacimiento, telefono, empresa});
    await conferencista.save();
    res.status(201).json({ message: 'Conferencista creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Obtener todos los conferencistas
export const obtenerTodosConferencistas = async (req, res) => {
  try {
    const conferencistas = await Conferencista.find();
    res.json(conferencistas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un conferencista por ID
export const obtenerConferencistaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const conferencista = await Conferencista.findById(id);
    if (!conferencista) return res.status(404).json({ message: 'Conferencista no encontrado' });

    res.json(conferencista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un conferencista por ID
export const actualizarConferencista = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, cedula, especialidad, ciudad, direccion, fecha_nacimiento, telefono, empresa, contraseña } = req.body;

    const conferencista = await Conferencista.findByIdAndUpdate(id, { nombre, apellido, cedula, especialidad, ciudad, direccion, fecha_nacimiento, telefono, empresa }, { new: true });
    if (!conferencista) return res.status(404).json({ message: 'Conferencista no encontrado' });

    res.json(conferencista);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un conferencista por ID
export const eliminarConferencista = async (req, res) => {
  try {
    const { id } = req.params;
    const conferencista = await Conferencista.findByIdAndDelete(id);
    if (!conferencista) return res.status(404).json({ message: 'Conferencista no encontrado' });

    res.json({ message: 'Conferencista eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 