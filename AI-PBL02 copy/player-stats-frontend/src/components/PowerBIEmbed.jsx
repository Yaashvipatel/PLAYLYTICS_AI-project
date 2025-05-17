import React from 'react';

const PowerBIEmbed = ({ embedUrl }) => {
  return (
    <iframe
      title="Power BI Dashboard"
      width="100%"
      height="800px"
      src="https://app.powerbi.com/reportEmbed?reportId=3b653cb8-7ba9-43ed-a7c2-97627ccb8c91&autoAuth=true&ctid=1490b17d-5dc9-4cbf-aeba-a2e854f521b8"
      frameBorder="0"
      allowFullScreen
      style={{ borderRadius: "8px", marginTop: "20px" }}
    />
  );
};

export default PowerBIEmbed;
