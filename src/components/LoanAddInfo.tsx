import { SyntheticEvent, useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";

type AdditionalData = {
  addInfo: string;
  gdpa: string;
  personalInfo: string;
};

type LoanAddInfoProps = AdditionalData & {
  updateFields: (fields: Partial<AdditionalData>) => void;
};

export function LoanAddInfo({
  addInfo,
  gdpa,
  personalInfo,
  updateFields,
}: LoanAddInfoProps) {
  const maxLength = 500;
  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    addInfo && setTextLength(addInfo.length);
  }, [addInfo]);

  const FirstCheckboxHandler = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.value === "GDPA" && gdpa !== "GDPA") {
      updateFields({ gdpa: inputElement.value });
    } else {
      updateFields({ gdpa: "" });
    }
  };

  const SecondCheckboxHandler = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    if (
      inputElement.value === "personalInfo" &&
      personalInfo !== "personalInfo"
    ) {
      updateFields({ personalInfo: inputElement.value });
    } else {
      updateFields({ personalInfo: "" });
    }
  };

  return (
    <FormWrapper title="Lisainfo">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <textarea
          className="add-info"
          autoFocus
          rows={5}
          cols={5}
          maxLength={maxLength}
          placeholder="Kasutatavaid sümboleid: 500"
          value={addInfo}
          onChange={(e) => updateFields({ addInfo: e.target.value })}
          onInvalid={(e: any) =>
            e.target.setCustomValidity("Väli on kohustuslik!")
          }
          onInput={(e: any) => e.target.setCustomValidity("")}
        />
        <div className="symbol-counter">
          {textLength} / {maxLength}
        </div>
      </div>
      <br />
      <div className="agreement-checkboxes">
        <label>
          Kliendiandmete töötlemise põhimõtted:
          <input
            type="checkbox"
            onChange={FirstCheckboxHandler}
            onInvalid={(e: any) =>
              e.target.setCustomValidity("Väli on kohustuslik!")
            }
            onInput={(e: any) => e.target.setCustomValidity("")}
            value="GDPA"
            checked={gdpa === "GDPA"}
          />
        </label>
        <br />
        <label>
          Nõustun isikuandmete töötlemisega:
          <input
            type="checkbox"
            onChange={SecondCheckboxHandler}
            onInvalid={(e: any) =>
              e.target.setCustomValidity("Väli on kohustuslik!")
            }
            onInput={(e: any) => e.target.setCustomValidity("")}
            value="personalInfo"
            checked={personalInfo === "personalInfo"}
          />
        </label>
      </div>
    </FormWrapper>
  );
}
