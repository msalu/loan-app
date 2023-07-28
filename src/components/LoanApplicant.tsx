import { SyntheticEvent } from "react";
import { FormWrapper } from "./FormWrapper";

type LoanData = {
  name: string;
  familyName: string;
  email: string;
  phone: string;
};

type LoanApplicantProps = LoanData & {
  updateFields: (fields: Partial<LoanData>) => void;
};

export function LoanApplicant({
  name,
  familyName,
  email,
  phone,
  updateFields,
}: LoanApplicantProps) {
  const pattern = new RegExp(/^(\d*([\\.\\,]\d*)?)?$/);

  const handlePhonenumberChange = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    if (pattern.test(inputElement.value)) {
      updateFields({ phone: inputElement.value });
    }
  };

  return (
    <FormWrapper title="Laenuvõtja andmed">
      <label className="required">Eesnimi</label>
      <input
        required
        autoFocus
        type="text"
        value={name}
        onChange={(e) => {
          updateFields({ name: e.target.value });
        }}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <label className="required">Perekonnanimi</label>
      <input
        required
        type="text"
        value={familyName}
        onChange={(e) => updateFields({ familyName: e.target.value })}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <label className="required">Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <label className="required">Telefon</label>
      <input
        required
        type="tel"
        value={phone}
        onChange={handlePhonenumberChange}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
    </FormWrapper>
  );
}
