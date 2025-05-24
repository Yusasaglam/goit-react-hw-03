function ContactList({ contacts, deleteContact }) {
    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <div key={contact.id} className="contact-card">
                    <p><span className="contact-icon">👤</span> {contact.name}</p>
                    <p><span className="contact-icon">📞</span> {contact.number}</p>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ContactList;
