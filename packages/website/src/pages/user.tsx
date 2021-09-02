import { WaitForAuth } from "../modules/auth/WaitForAuth";
import UserPage from "../modules/user/user-page";


export default function Dash() {
  return (
    <WaitForAuth>
      <UserPage />
    </WaitForAuth>
  );
}
