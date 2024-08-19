import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeddypA7Ij5ZmNYHUXPF4136jqrxve1NdZ8dFRunE8AXqn12g/formResponse";
        const formData = new FormData();
        formData.append('entry.1407440905', email);

        try {
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });
            setMessage('Thank you! Your email has been submitted.');
        } catch (error) {
            setMessage('Oops! Something went wrong.');
        }
    };

    return (
        <>
            <form className="d-flex" id="subscribe-form" onSubmit={handleSubmit}>
                
                <input value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-control email-input"
                    required
                />
                <button
                    type="submit"
                    className="btn ms-2 btn-style-1"
                >
                    Subscribe
                </button>
            </form>
            {message && <p style={{paddingTop: "20px", color: "#fff"}}>{message}</p>}
        </>
    );
};

export default EmailForm;
