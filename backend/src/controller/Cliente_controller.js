import Cliente from '../models/Cliente.js';

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {
  try {
    const { cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento } = req.body;
    const clienteExistente = await Cliente.findOne({ cedula });
    const emailExistente = await Cliente.findOne({email})
    if (clienteExistente) return res.status(400).json({ message: 'Cliente ya existe' });
    if (emailExistente) return res.status(400).json({ message: 'Cedula ya existe' });

    const auditorio = new Cliente({ cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento });
    await auditorio.save();
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los clientes
export const obtenerTodosClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un cliente por ID
export const obtenerClientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un cliente por ID
export const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento } = req.body;

    const cliente = await Cliente.findByIdAndUpdate(id, { cedula, nombre, apellido, ciudad, email, direccion, telefono, fecha_nacimiento }, { new: true });
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un cliente por ID
export const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByIdAndDelete(id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 