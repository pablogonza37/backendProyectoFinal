import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    precio: {
        type: Number,
        required: true,
        min: 50,
        max: 20000
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/.test(value);
            },
            message: props => `${props.value} no es una URL de imagen válida.`
        }
    },
    estado: {
        type: String,
        required: true,
        enum: ["pendiente", "realizado", "en proceso"]
    },
    fecha: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precioTotal:{
        type: Number,
        required: true,
        min: 50,
        max: 2000000
    },
    direccion: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200
    }
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;

