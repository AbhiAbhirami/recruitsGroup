import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="signin" element={<SignIn />} />
//         <Route path="signup" element={<SignUp />} />
//         {/* <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthInit } from "./core/Auth";
import { LayoutSplashScreen } from "./core/SplashScreen";

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <AuthInit>
        <Outlet />
      </AuthInit>
    </Suspense>
  );
};

export default App;
