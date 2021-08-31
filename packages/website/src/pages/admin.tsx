import AdminPage from "../modules/admin/admin-page";
import { WaitForAuth } from "../modules/auth/WaitForAuth";


export default function Dash() {
  return (
    <WaitForAuth>
      <AdminPage />
    </WaitForAuth>
  );
}
