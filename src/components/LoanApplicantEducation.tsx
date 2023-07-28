import { FormWrapper } from "./FormWrapper";

type LoanApplicantEducationData = {
  education: string;
  job: string;
};

type LoanApplicantEducationProps = LoanApplicantEducationData & {
  updateFields: (fields: Partial<LoanApplicantEducationData>) => void;
};

export function LoanApplicantEducation({
  education,
  job,
  updateFields,
}: LoanApplicantEducationProps) {
  return (
    <FormWrapper title="Haridus ja elukutse">
      <div className="education-status">
        <label className="required">
          Haridus:
          <select
            required
            onChange={(e) => {
              updateFields({ education: e.target.value });
            }}
            onInvalid={(e: any) =>
              e.target.setCustomValidity("Väli on kohustuslik!")
            }
            onInput={(e: any) => e.target.setCustomValidity("")}
            value={education}
          >
            <option value="">---</option>
            <option>Põhiharidus</option>
            <option>Keskharidus</option>
            <option>Kutseharidus</option>
            <option>Rakenduslik kõrgharidus</option>
            <option>Kõrgharidus</option>
          </select>
        </label>
      </div>
      <br />
      <div className="job-status">
        <label className="required">
          Elukutse/staatus:
          <select
            required
            onChange={(e) => {
              updateFields({ job: e.target.value });
            }}
            onInvalid={(e: any) =>
              e.target.setCustomValidity("Väli on kohustuslik!")
            }
            onInput={(e: any) => e.target.setCustomValidity("")}
            value={job}
          >
            <option value="">---</option>
            <option>Tööline</option>
            <option>Spetsialist/Kontoritöötaja</option>
            <option>Vanemspetsialist</option>
            <option>Keskastme juht</option>
            <option>Tippjuht</option>
            <option>Üli-/õpilane</option>
            <option>Pensionär</option>
            <option>Koduperenaine</option>
            <option>FIE</option>
            <option>Töötu</option>
          </select>
        </label>
      </div>
    </FormWrapper>
  );
}
