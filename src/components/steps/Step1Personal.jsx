function Step1Personal({ formData, setFormData, errors, setErrors, nextStep }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const isValid =
    formData.firstName &&
    formData.lastName &&
    formData.dob;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Personal Information
      </h2>

      {["firstName", "lastName", "dob"].map((field) => (
        <div key={field} className="mb-4">
          <label className="block mb-1 font-medium capitalize">
            {field === "dob" ? "Date of Birth" : field}
          </label>

          <input
            type={field === "dob" ? "date" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {errors[field] && (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

      <button
        onClick={nextStep}
        disabled={!isValid}
        className={`w-full py-2 rounded-lg text-white ${
          isValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Step1Personal;