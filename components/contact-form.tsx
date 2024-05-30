"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
    const [nameStyle, setNameStyle] = useState({ backgroundColor: "#FFFFFF", color: "#333333" });
    const [emailStyle, setEmailStyle] = useState({ backgroundColor: "#FFFFFF", color: "#333333" });
    const [messageStyle, setMessageStyle] = useState({ backgroundColor: "#FFFFFF", color: "#333333" });
    const [buttonBg, setButtonBg] = useState("#ff8a3450");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const whatsappNumber = "+56968450222"; 
        const encodedMessage = encodeURIComponent(`Hola! Mi nombre es ${name} (${email}). Te contacto por: ${message}`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    };

    return (
        <motion.form
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col h-full gap-5 rounded-lg xl:w-[500px] justify-center mx-auto md:w-[350px] p-5 bg-[#ffffff20] shadow-xl"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl leading-tight mt-4 text-center md:text-5xl md:mb-5">Contacto</h1>

            <motion.input
                type="text"
                name="name"
                value={name}
                placeholder="Tu Nombre"
                className="p-4 border-2 border-gray-300 focus:border-blue-500 rounded-lg focus:invalid:border-red-500 focus:invalid:text-red-700"
                required
                style={nameStyle}
                onFocus={() => setNameStyle({ backgroundColor: "#333333", color: "#FFFFFF" })}
                onBlur={() => setNameStyle({ backgroundColor: "#FFFFFF", color: "#333333" })}
                onChange={(e) => setName(e.target.value)} 
            />
            <motion.input
                type="email"
                name="email"
                value={email}
                placeholder="Tu E-mail"
                className="p-4 border-2 border-gray-300 focus:border-blue-500 rounded-lg focus:invalid:border-red-500 focus:invalid:text-red-700"
                required
                style={emailStyle}
                onFocus={() => setEmailStyle({ backgroundColor: "#333333", color: "#FFFFFF" })}
                onBlur={() => setEmailStyle({ backgroundColor: "#FFFFFF", color: "#333333" })}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <motion.textarea
                name="message"
                placeholder="Tu Mensaje"
                value={message}
                className="p-4 border-2 border-gray-300 focus:border-blue-500 rounded-lg h-32 focus:invalid:border-red-500 focus:invalid:text-red-700"
                required
                style={messageStyle}
                onFocus={() => setMessageStyle({ backgroundColor: "#333333", color: "#FFFFFF" })}
                onBlur={() => setMessageStyle({ backgroundColor: "#FFFFFF", color: "#333333" })}
                onChange={(e) => setMessage(e.target.value)} 
            />
            <motion.button
                type="submit"
                className="py-3 px-6 rounded-lg font-bold text-white"
                style={{ backgroundColor: buttonBg }}
                onMouseEnter={() => setButtonBg("#ff8a34")} 
                onMouseLeave={() => setButtonBg("#ff8a3450")} 
            >
                Enviar Mensaje
            </motion.button>
        </motion.form>
    );
};

export default ContactForm;
