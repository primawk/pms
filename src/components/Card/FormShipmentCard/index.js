import { useState } from 'react';
import FirstStep from './first-step';
import SecondStep from './second-step';
import ThirdStep from './third-step';

export default function FormShipmentCard() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({});

  const handlePost = () => {};

  const handleEdit = () => {};

  const handleBack = (data) => {
    if (step !== 1) {
      setStep(step - 1);
    }
    setValue({ ...value, ...data });
    window.scrollTo(0, 0);
  };

  const handleContinue = (data) => {
    window.scrollTo(0, 0);
    if (step !== 3) {
      setStep(step + 1);
      setValue({ ...value, ...data });
    } else console.log('post or edit');
  };

  return (
    <>
      {step === 1 && <FirstStep handleContinue={handleContinue} />}
      {step === 2 && <SecondStep handleBack={handleBack} handleContinue={handleContinue} />}
      {step === 3 && <ThirdStep handleBack={handleBack} handleContinue={handleContinue} />}
    </>
  );
}
