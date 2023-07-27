import {
  InputHTMLAttributes,
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
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
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [ekiri, setEmail] = useState<string>(email);
  const [clicked, setClicked] = useState(false);

  const inputChangeHandler = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    console.log("tere1", input.value);
    setEmail(input.value);
    if (!validateEmail(input.value)) {
      setErrorMessage("Please enter a valid email address");
      setIsError(true);
    } else {
      setIsError(false);
    }
    //updateFields({ email: input.value });
    //setIsError(false);
  };

  const validateEmail = (ekiki: string) => {
    /*const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setIsError(true)
    } else {
      setIsError(false);
    }*/
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(ekiki);
  };

  const isValid = (email: string): boolean => {
    if (!isEmail(email)) {
      setErrorMessage(`${email} is not a valid email address.`);
      setIsError(true);
      return false;
    }
    return true;
  };

  const isEmail = (email: string) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  return (
    <FormWrapper title="Laenuvõtja andmed">
      <label className="required">Eesnimi</label>
      <input
        className={clicked ? "base-state" : ""}
        required
        autoFocus
        type="text"
        value={name}
        onChange={(e) => {
          updateFields({ name: e.target.value });
          setClicked(true);
        }}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Märgitud väli on täitmata!")
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
          e.target.setCustomValidity("Märgitud väli on täitmata!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="required">Email</label>
        <input
          //required
          type="text"
          value={ekiri}
          onChange={inputChangeHandler}
          /*onInvalid={(e: any) =>
            e.target.setCustomValidity("Märgitud väli on täitmata!")
          }
          onInput={(e: any) => e.target.setCustomValidity("")}*/
        />
        <div>
          {isError ? (
            <div className="">
              <span>!</span>
              {errorMessage}
            </div>
          ) : null}
        </div>
      </div>
      <label className="required">Telefon</label>
      <input
        required
        type="tel"
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Märgitud väli on täitmata!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
    </FormWrapper>
  );
}
