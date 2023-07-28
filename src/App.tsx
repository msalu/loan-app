import { FormEvent, useState } from "react";
import { LoanApplicant } from "./components/LoanApplicant";
import { useMultistepForm } from "./useMultistepForm";
import { LoanAddInfo } from "./components/LoanAddInfo";
import { Loan } from "./components/Loan";
import { LoanIncome } from "./components/LoanIncome";
import { LoanSummary } from "./components/LoanSummary";
import { IntroPage } from "./components/IntroPage";
import { LoanApplicantEducation } from "./components/LoanApplicantEducation";
import "./index.css";

type FormData = {
  name: string;
  familyName: string;
  email: string;
  phone: string;
  education: string;
  job: string;
  netoIncome: string;
  outgoings: string;
  loanSum: string;
  loanPeriod: string;
  paybackDate: string;
  addInfo: string;
  agreement: string;
  gdpa: string;
  personalInfo: string;
  onSubmit: { FormData: any };
  children: React.ReactNode;
};

const INITIAL_DATA: FormData = {
  name: "",
  familyName: "",
  email: "",
  phone: "",
  education: "",
  job: "",
  netoIncome: "",
  outgoings: "",
  loanSum: "",
  loanPeriod: "",
  paybackDate: "",
  addInfo: "",
  agreement: "",
  gdpa: "",
  personalInfo: "",
  onSubmit: { FormData },
  children: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <IntroPage />,
    <Loan {...data} updateFields={updateFields} />,
    <LoanIncome {...data} updateFields={updateFields} />,
    <LoanApplicant {...data} updateFields={updateFields} />,
    <LoanApplicantEducation {...data} updateFields={updateFields} />,
    <LoanAddInfo {...data} updateFields={updateFields} />,
    <LoanSummary {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    window.location.assign("https://www.swedbank.ee/private?language=EST");
  }

  return (
    <>
      <div className="title-container">
        <div className="title">
          <h1>Väikelaenu taotlus</h1>
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            {step}
            <div className="button-container">
              {!isFirstStep && (
                <div className="button-back">
                  <button type="button" onClick={back}>
                    Tagasi
                  </button>
                </div>
              )}
              <button type="submit" style={{ cursor: "pointer" }}>
                {isLastStep
                  ? "Esita ja panka"
                  : isFirstStep
                  ? "Täidan taotluse"
                  : "Edasi"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
