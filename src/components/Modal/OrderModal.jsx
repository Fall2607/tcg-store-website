import React, { useEffect, useState } from "react";

const OrderModal = ({ show, onClose, onSubmit, initialData }) => {
    const defaultOrderState = {
        id: "",
        user_id: "",
        recipient_name: "",
        phone_number: "",
        address: "",
        city: "",
        postal_code: "",
        product_id: "",
        product_name: "",
        quantity: "",
        price_per_unit: "",
        total_price: "",
        payment_method: "",
        status: "pending", // default value
    };

    const [formData, setFormData] = useState(defaultOrderState);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData(defaultOrderState);
        }
    }, [initialData, show]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Data to Submit:", formData);
        onSubmit(formData);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-3xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        {initialData ? "Edit Order" : "Add Order"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-red-500"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "User ID", name: "user_id", type: "number" },
                            { label: "Recipient Name", name: "recipient_name" },
                            { label: "Phone Number", name: "phone_number" },
                            { label: "Address", name: "address" },
                            { label: "City", name: "city" },
                            { label: "Postal Code", name: "postal_code" },
                            { label: "Product ID", name: "product_id", type: "number" },
                            { label: "Product Name", name: "product_name" },
                            { label: "Quantity", name: "quantity", type: "number" },
                            { label: "Price per Unit", name: "price_per_unit", type: "number" },
                            { label: "Total Price", name: "total_price", type: "number" },
                            { label: "Payment Method", name: "payment_method" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block mb-1 font-medium text-sm text-gray-700">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type || "text"}
                                    name={field.name}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                                />
                            </div>
                        ))}

                        {/* Status Dropdown */}
                        <div>
                            <label className="block mb-1 font-medium text-sm text-gray-700">
                                Status
                            </label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            >
                                <option value="pending">Pending</option>
                                <option value="dikemas">Dikemas</option>
                                <option value="dijalan">Dijalan</option>
                                <option value="sampai">Sampai</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                        >
                            {initialData ? "Update" : "Create"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;
