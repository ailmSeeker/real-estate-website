// Checkout.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { property_id } = useParams();

    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        // Fetch the property details for the given property_id
        fetch(`http://localhost:3000/data/${property_id}`)
            .then((response) => response.json())
            .then((data) => setSelectedProperty(data))
            .catch(() => setSelectedProperty(null)); // Handle error case
    }, [property_id]);

    if (!selectedProperty) {
        // Handle case when property with the given id is not found or during loading
        return <div>Loading...</div>;
    }

    const handlePayment = () => {
        // Add your payment processing logic here
        // For example, you can integrate with a payment gateway and handle the payment process
        // After successful payment, you can show a success message or redirect the user to a confirmation page
        console.log('Payment processed successfully!');
    };

    return (
        <div className='bg-slate-800 h-screen w-screen'>
            <div className="container mx-auto my-auto w-fit h-screen justify-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Checkout</h2>
                <div className="bg-white p-4 rounded shadow-md">
                    <h3 className="text-lg font-semibold mb-4">{selectedProperty.title}</h3>
                    <p className="mb-4">{selectedProperty.description}</p>
                    <p className="mb-4">Price: {selectedProperty.price}</p>
                    <button
                        className="bg-slate-800 text-white py-2 px-4 rounded"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
