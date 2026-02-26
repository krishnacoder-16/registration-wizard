import { useState } from "react";
import Step1Personal from "./components/steps/Step1Personal";
import Step2Account from "./components/steps/Step2Account";
import Step3Review from "./components/steps/Step3Review";
import SuccessScreen from "./components/SuccessScreen";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

        {isSubmitted ? (
          <SuccessScreen />
        ) : (
          <>
            {currentStep === 1 && (
              <Step1Personal
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                nextStep={nextStep}
              />
            )}

            {currentStep === 2 && (
              <Step2Account
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {currentStep === 3 && (
              <Step3Review
                formData={formData}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
              />
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default App;