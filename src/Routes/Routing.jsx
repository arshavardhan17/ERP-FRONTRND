import { Routes, Route } from "react-router-dom";

import Holders from "../components/Holders";
import FeedBackForm from "../components/FeedBackForm";
import Members from "../components/Members";
import Registration from "../components/Registration";
import Clubs from "../components/Clubs";
import Home from "../components/Home";
import Help from "../components/Help";
import Councelling from "../components/Councelling";
import Examsection from "../components/Examsection";
import Feepayments from "../components/Feepayments";
import Hostelmanagment from "../components/Hostelmanagment";

import Infrastructure from "../components/Infrastructure";
import Library from "../components/Library";
import Halticket from "../components/Halticket";
import Profile from "../components/Profile";
import Timetable from "../components/Timetable";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/attendence" element={<Members />} />
      <Route path="/careerchoice" element={<Holders />} />
      <Route path="/courses" element={<Holders />} />
      <Route path="/feedback" element={<FeedBackForm />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/Councelling" element={<Councelling />} />
      <Route path="/Examsection" element={<Examsection />} />
      <Route path="/Feepayments" element={<Feepayments />} />
      <Route path="/Hostelmanagment" element={<Hostelmanagment />} />
      <Route path="/Hallticket" element={<Halticket />} />
      <Route path="/Infrastructure" element={<Infrastructure />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Timetable" element={<Timetable />} />
    </Routes>
  );
};

export default AppRoutes;
