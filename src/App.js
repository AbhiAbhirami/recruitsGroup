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
  // function handleCallbackResponse(response) {
  //   console.log(response);
  // }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: process.env.GOOGLE_CLIENT_ID,
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <AuthInit>
        <Outlet />
      </AuthInit>
    </Suspense>
  );
};

export default App;
