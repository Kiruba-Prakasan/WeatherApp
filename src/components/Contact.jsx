import React from 'react';

function Contact() {
    return (
        <div className="flex items-center justify-between bg-white bg-opacity-70 shadow-md m-10 p-5 rounded-md overflow-hidden"> {/* Adjusted opacity for transparency */}
            <div className="w-1/2">
                <img 
                    src={`${process.env.PUBLIC_URL}/Contact.png`} 
                    alt="Contact" 
                    className="w-2/3 h-auto mx-auto"  // Adjust width as needed
                />
            </div>
            <div className="w-1/2 p-5">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="bg-white bg-opacity-50 p-4 rounded-md shadow-md"> {/* Lightly transparent background for the form */}
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input type="text" id="name" className="border border-gray-300 rounded-md w-full p-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" className="border border-gray-300 rounded-md w-full p-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea id="message" className="border border-gray-300 rounded-md w-full p-2" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
