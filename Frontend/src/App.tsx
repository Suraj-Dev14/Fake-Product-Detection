import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/LoginPage";
import { SignupPage } from "./Pages/SignUpPage";
import { LandingLayout } from "./Layouts/LandingLayout";
import { FAQPage } from "./Pages/FAQPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { FeaturesPage } from "./Pages/FeaturesPage";
import { PrivacyPage } from "./Pages/PrivacyPage";
import { TermsPage } from "./Pages/TermsPage";
import { SecurityPage } from "./Pages/SecurityPage";
import { NotFoundPage } from "./Pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="security" element={<SecurityPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
