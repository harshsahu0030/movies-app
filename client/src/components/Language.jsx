import { useState } from "react";
import { homeData } from "../data/homeData";

const Language = () => {
  //states
  const [language, setLanguage] = useState("english");

  return (
    <div className="language-section">
      <select
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {homeData && homeData.languages.length > 0
          ? homeData.languages.map((lang) => (
              <option key={lang.name} value={lang.name}>
                {lang.name}
              </option>
            ))
          : "No language available"}
      </select>
    </div>
  );
};

export default Language;
