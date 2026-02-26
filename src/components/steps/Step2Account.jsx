import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Step2Account({
  formData,
  setFormData,
  errors,
  setErrors,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const validate = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value.includes("@")) error = "Invalid email";
    }

    if (name === "password") {
      if (value.length < 8) error = "Password must be at least 8 characters";
    }

    if (name === "confirmPassword") {
      if (value !== formData.password)
        error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const isValid =
    formData.email &&
    formData.password.length >= 8 &&
    formData.confirmPassword === formData.password &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Account Details
      </h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4 relative">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 pr-10"
        />
        <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!isValid}
          className={`px-4 py-2 rounded-lg text-white ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2Account;