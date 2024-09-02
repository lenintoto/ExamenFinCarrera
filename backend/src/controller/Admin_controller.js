import Admin from '../models/Admin.js';

// Registrar un nuevo administrador
export const registrarAdmin = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const adminExistente = await Admin.findOne({ email });
    if (adminExistente) return res.status(400).json({ message: 'Ese email ya esta registrado' });

    const admin = new Admin({ nombre, apellido, email, password });
    await admin.save();
    res.status(200).json({ message: 'Administrador registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });


    const esValido = await admin.comparePassword(password);
    if (!esValido) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = admin.generateAuthToken();
    const rol = admin.rol;
    const _id = admin.id;
    res.status(200).json({token, rol, _id});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los administradores
export const obtenerTodosAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un administrador por ID
export const obtenerAdminPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });

    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener los datos del administrador para una tarjeta u otro uso
export const obtenerDatosAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });

    res.json({
      nombre: admin.nombre,
      apellido: admin.apellido,
      email: admin.email
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un administrador por ID
export const actualizarAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, cedula, email, contraseña } = req.body;

    const admin = await Admin.findByIdAndUpdate(id, { nombre, apellido, cedula, email, contraseña }, { new: true });
    if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });

    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un administrador por ID
export const eliminarAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });

    res.json({ message: 'Administrador eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};