import { SyntheticEvent, useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";

type LoanData = {
  loanSum: string;
  loanPeriod: string;
  paybackDate: string;
};

type LoanProps = LoanData & {
  updateFields: (fields: Partial<LoanData>) => void;
};

export function Loan({
  loanSum,
  loanPeriod,
  paybackDate,
  updateFields,
}: LoanProps) {
  const defaultDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(
    paybackDate !== "" ? paybackDate : defaultDate
  );

  /*const handleInputChange = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    updateFields({ paybackDate: inputElement.value });
  };*/

  const dateChangeHandler = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setDate(inputElement.value);
  };

  useEffect(() => {
    date && updateFields({ paybackDate: date });
  }, [date, updateFields]);

  return (
    <FormWrapper title="Laenuinfo">
      <label className="required">Laenusumma</label>
      <input
        required
        autoFocus
        type="number"
        min="300"
        max="20000"
        step="50"
        value={loanSum}
        onChange={(e) => updateFields({ loanSum: e.target.value })}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <label className="required">
        Laenu periood (<i>kuud </i>)
      </label>
      <input
        required
        type="number"
        min="6"
        max="60"
        step="1"
        value={loanPeriod}
        onChange={(e) => updateFields({ loanPeriod: e.target.value })}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
      <label className="required">Tagasimakse kuupäev</label>
      <input
        required
        min={1}
        type="date"
        value={date}
        onChange={dateChangeHandler}
        onInvalid={(e: any) =>
          e.target.setCustomValidity("Väli on kohustuslik!")
        }
        onInput={(e: any) => e.target.setCustomValidity("")}
      />
    </FormWrapper>
  );
}
