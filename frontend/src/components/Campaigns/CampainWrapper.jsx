

import CampainItem from "./CampainItem";
import "./CampainWrapper.css"
const CampainWrapper = () => {
  return (
    <div className="campaigns-wrapper">
        <CampainItem/>
        <CampainItem/>
      </div>
  );
};

export default CampainWrapper;
