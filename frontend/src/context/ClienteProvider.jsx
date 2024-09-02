import axios from "axios";
import { createContext, useState } from "react";

const ClientesContext = createContext()

const ClienteProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [datosclientes, setDatosclientes] = useState([])
    const handleModal = () => {
        setModal(!modal)
    }

    const registrarCliente = async (datos) => {
        const token = localStorage.getItem('token')
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}`//Agregar la ruta del back
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.post(url, datos, options)
            console.log(respuesta)
            setDatosclientes([respuesta.data?.cliente, ...datosclientes])//verificar esto
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarCliente = async (id, form) => {
        try {
            const confirmarAccion = confirm("Esta seguro de actualizar la información del cliente?")
            if (confirmarAccion) {
                const token = localStorage.getItem("token")
                const url = `${import.meta.env.VITE_BACKEND_URL}`//Agregar la ruta del back
                const headers = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

                const respuesta = await axios.put(url, form, headers)
                const clienteActualizado = datosclientes.filter(cliente => cliente._id)
                setDatosclientes(clienteActualizado)
                console.log(respuesta)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarCliente = async (id) => {
        try {
            const confirmarAccion = confirm("Esta seguro de eliminar esta materia?")
            if (confirmarAccion) {
                const token = localStorage.getItem("token")
                const url = `${import.meta.env.VITE_BACKEND_URL}`//Agregar del back
                const options = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const respuesta = await axios.delete(url, options)
                console.log(respuesta)
                const clienteActualizado = datosclientes.filter(
                    cliente => cliente._id !== id
                )
                setDatosclientes(clienteActualizado)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(<ClientesContext.Provider
    value={{
        modal,
        setModal,
        handleModal,
        datosclientes,
        setDatosclientes,
        registrarCliente,
        actualizarCliente,
        eliminarCliente
    }}>{children}
    </ClientesContext.Provider>)
}
export {ClienteProvider}

export default ClientesContext