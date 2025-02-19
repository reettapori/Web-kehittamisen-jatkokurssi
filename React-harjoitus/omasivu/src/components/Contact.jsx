import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Kiitos, ${name}! Viestisi on lähetetty.`);
        setName("");
        setMessage("");
    };

    return (
        <section id="contact">
            <h2>Yhteydenotto</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nimesi:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="message">Viestisi:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Lähetä viesti</button>
            </form>
        </section>
    );
};

export default Contact;
