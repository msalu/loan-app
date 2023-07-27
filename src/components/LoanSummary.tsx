import { FormWrapper } from "./FormWrapper";

type SummaryData = {
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

};

type LoanSummaryProps = SummaryData & {
  updateFields: (fields: Partial<SummaryData>) => void;
};

export function LoanSummary({
  name,
  familyName,
  email,
  phone,
  education,
  job,
  netoIncome,
  outgoings,
  loanSum,
  loanPeriod,
  paybackDate,
  addInfo,
  agreement,
  gdpa,
  personalInfo
}: LoanSummaryProps) {

  
  return (
    <FormWrapper title="Laenutaotluse ülevaade">
      <table>
        <tbody>
          <tr>
            <td>Laenusumma:</td>
            <td>{loanSum} €</td>
          </tr>
          <tr>
            <td>Laenu periood:</td>
            <td>{loanPeriod} kuud</td>
          </tr>
          <tr>
            <td>Tagasimakse:</td>
            <td>{paybackDate}</td>
          </tr>
          <tr>
            <td>Netosissetulek:</td>
            <td>{netoIncome} €</td>
          </tr>
          <tr>
            <td>Laenukohustused väljaspool Swedbanki:</td>
            <td>{outgoings}</td>
          </tr>
          <tr>
            <td>Eesnimi:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Perekonnanimi:</td>
            <td>{familyName}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Telefon:</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Haridus:</td>
            <td>{education}</td>
          </tr>
          <tr>
            <td>Elukutse:</td>
            <td>{job}</td>
          </tr>
          <tr>
            <td>Lisainfo:</td>
            <td>{addInfo}</td>
          </tr>
          <tr>
            <td>Kliendiandmete töötlemine:</td>
            <td>{gdpa !== "" ? "Olen nõus!" : "Ei ole nõus!"}</td>
          </tr>
          <tr>
            <td>Isikuandmete töötlemine:</td>
            <td>
              {personalInfo !== "" ? "Olen nõus!" : "Ei ole nõus!"}
            </td>
          </tr>
        </tbody>
      </table>
    </FormWrapper>
  );
}
