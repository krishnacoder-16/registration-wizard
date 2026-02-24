function Step1Personal({ formData, setFormData, nextStep }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Personal Information
      </h2>

      {/* First Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={nextStep}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
}

export default Step1Personal;