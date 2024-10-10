import Landing from "./pages/Landing";
import SupplierSignIn from "./components/SignIn/Supplier/SupplierSignIn";
import SupplierSignUp from "./components/SignIn/Supplier/SupplierSignUp";
import SignUp from "./pages/SignUp";
import UploadDocuments from "./components/Supplier/UploadDocuments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingScreen from "./components/Supplier/WaitingScreen";
import SupplierLandingPage from "./components/Supplier/SupplierLandingPage";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Unapproved from "./components/Admin/Unapproved";
import Approved from "./components/Admin/Approved";
import SupplierProfile from "./components/Supplier/SupplierProfile";
import CompanyLandingPage from "./components/Company/CompanyLandingPage";
import UploadCompanyDocuments from "./components/Company/UploadCompanyDocuments";
import CompanySupplierProfile from "./components/Company/CompanySupplierProfile";
import Status from "./components/Supplier/Status";
import CompStatus from "./components/Company/CompStatus";
import ApprovedCompanies from "./components/Admin/ApprovedCompanies";
import UnapprovedCompanies from "./components/Admin/UnapprovedCompanies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/supplierSignUp" element={<SupplierSignUp />} />
        <Route path="/supplierSignIn" element={<SupplierSignIn />} />
        <Route path="/uploadDocuments" element = {<UploadDocuments/>}></Route>
        <Route path="/supplierLandingPage" element={<SupplierLandingPage/>}></Route>
        <Route path="/wait" element={<WaitingScreen/>}></Route>
        <Route path ="/admin" element = {<AdminDashboard/>}></Route>
        <Route path ="/unapproved" element = {<Unapproved/>}></Route>
        <Route path ="/approved" element = {<Approved/>}></Route>
        <Route path="/supplier/profile" element={<SupplierProfile />}></Route>
        <Route path="/companyLandingPage" element={<CompanyLandingPage/>}></Route>
        <Route path="/company/uploadDocuments" element={<UploadCompanyDocuments />}></Route>
        <Route path="/company/sup" element={<CompanySupplierProfile />}></Route>
        <Route path="/status" element={<Status />}></Route>
        <Route path="/comp/status" element={<CompStatus />}></Route>
        <Route path="/approved/comp" element={<ApprovedCompanies />}></Route>
        <Route path="/unapproved/comp" element={<UnapprovedCompanies />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
