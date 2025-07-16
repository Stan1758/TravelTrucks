// CamperPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const CamperPage = () => {
  const { id } = useParams();

  return <div>📄 Camper Detail Page. ID: {id}</div>;
};
export default CamperPage;
