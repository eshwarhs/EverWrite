import BrandingSection from "../components/BrandingSection";
import FormSection from "../components/FormSection";
import "./LandingPage.css";
import React from "react";
import { get } from "../lib/Requests";

export default function LandingPage() {

  const loadData = async () => {
    const url = `/api/health-check`;
    get(url, {
      success: function (data) {
        console.log("hello");
        console.log(data);
        
      },
    });
  };

  React.useEffect(() => {
    //prevents double call
    loadData();
  }, []);

  return (
    <article className="signup-article">
      <BrandingSection />
      <FormSection />
    </article>
  );
}
