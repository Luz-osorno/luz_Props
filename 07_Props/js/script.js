const app1 = {
    data() {
        return {
            nuevoContacto: {
                nombre: '',
                telefono: '',
                categoria: '',
                mensajes: 0,
                llamadas: 0
            },
            contactos: []
        };
    },
    methods: {
        agregarContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.telefono) {
                this.contactos.push({ ...this.nuevoContacto });
                this.nuevoContacto = {
                    nombre: '',
                    telefono: '',
                    categoria: 'familiar',
                    mensajes: 0,
                    llamadas: 0
                };
            } else {
                alert("Por favor, completa todos los campos.");
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        validarLimites(contacto) {
            if (contacto.mensajes < 0) contacto.mensajes = 0;
            if (contacto.mensajes > 25) contacto.mensajes = 25;
            if (contacto.llamadas < 0) contacto.llamadas = 0;
            if (contacto.llamadas > 15) contacto.llamadas = 15;
        }
    },
    computed: {
        totalMensajes() {
            return this.contactos.reduce((sum, contacto) => sum + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((sum, contacto) => sum + contacto.llamadas, 0);
        }
    }
};

Vue.createApp(app1).mount('#seccion');