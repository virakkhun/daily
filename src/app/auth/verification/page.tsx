import { VerificationContainer } from "./_components/verification-container";
import { VerificationDesc } from "./_components/verification-desc";
import { VerificationTitle } from "./_components/verification-title";

export default function Page() {
  return (
    <VerificationContainer>
      <VerificationTitle />
      <VerificationDesc />
    </VerificationContainer>
  );
}
