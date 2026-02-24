function Step3Review({ formData, prevStep, handleSubmit }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Review Your Details
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">First Name:</span>
          <span>{formData.firstName}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Last Name:</span>
          <span>{formData.lastName}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">DOB:</span>
          <span>{formData.dob}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Email:</span>
          <span>{formData.email}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3Review;