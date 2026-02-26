function ProgressBar({ currentStep, totalSteps }) {
  const width = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      <p className="text-sm mb-2 text-gray-600">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;