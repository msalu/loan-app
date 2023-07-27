import { SyntheticEvent } from "react";
import { FormWrapper } from "./FormWrapper";
import Tooltip from "../tooltip/Tooltip";

type LoanIncomeData = {
  netoIncome: string;
  outgoings: string;
};

type LoanIncomeProps = LoanIncomeData & {
  updateFields: (fields: Partial<LoanIncomeData>) => void;
};

export function LoanIncome({
  outgoings,
  netoIncome,
  updateFields,
}: LoanIncomeProps) {
  const handleInputChange = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    updateFields({ outgoings: inputElement.value });
  };

  return (
    <FormWrapper title="Sissetulekud ja kohustused">
      <div>
        <label className="required">Netosissetulek</label>
        <input
          //required
          autoFocus
          type="number"
          min="0"
          max="10000"
          step="100"
          value={netoIncome || 1000}
          onChange={(e) => updateFields({ netoIncome: e.target.value })}
          onInvalid={(e: any) =>
            e.target.setCustomValidity("Märgitud väli on täitmata!")
          }
          onInput={(e: any) => e.target.setCustomValidity("")}
        />
      </div>
      <br />
      <div className="outgoings-container">
        <label className="required">
          Kas Sul on maksekohustusi väljaspool Swedbanki?
        </label>
        <Tooltip
          direction="bottom"
          content="Krediitkaardi tagasimaksed või 
          püsikorraldusmaksed teises pangas."
          delay={100}
        >
          <span>&#63;</span>
        </Tooltip>
        <div className="outgoings-checkboxes">
          <label>
            <input
              //required
              name="checkbox"
              type="radio"
              onChange={handleInputChange}
              onInvalid={(e: any) =>
                e.target.setCustomValidity("Märgitud väli on täitmata!")
              }
              onInput={(e: any) => e.target.setCustomValidity("")}
              value="Ei"
              checked={outgoings === "Ei"}
            />
            Ei
          </label>
          <label>
            <input
              name="checkbox"
              type="radio"
              onChange={handleInputChange}
              onInvalid={(e: any) =>
                e.target.setCustomValidity("Märgitud väli on täitmata!")
              }
              onInput={(e: any) => e.target.setCustomValidity("")}
              value="Jah"
              checked={outgoings === "Jah"}
            />
            Jah
          </label>
        </div>
      </div>
    </FormWrapper>
  );
}
