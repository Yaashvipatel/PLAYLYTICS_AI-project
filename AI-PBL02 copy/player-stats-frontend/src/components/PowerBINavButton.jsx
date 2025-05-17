import React from 'react';

const PowerBINavButton = () => {
  const powerBIUrl = "https://app.powerbi.com/reportEmbed?reportId=3b653cb8-7ba9-43ed-a7c2-97627ccb8c91&autoAuth=true&ctid=1490b17d-5dc9-4cbf-aeba-a2e854f521b8"; // placeholder for now

  const openPowerBIDashboard = () => {
    window.open(powerBIUrl, "_blank");
  };

  return (
    <button 
      onClick={openPowerBIDashboard}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0078d4",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      View Power BI Dashboard
    </button>
  );
};

export default PowerBINavButton;
