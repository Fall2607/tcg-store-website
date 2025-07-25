import React from 'react';
import FormComponent from "./FormComponent";

const AddUser = () => {
  const userFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { 
      name: 'role', 
      label: 'Role', 
      type: 'select', 
      required: true,
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' }
      ]
    },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true },
  ];

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission to API here
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <FormComponent
        title="Add New User"
        fields={userFields}
        onSubmit={handleSubmit}
        cancelLink="/users"
      />
    </div>
  );
};

export default AddUser;