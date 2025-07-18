// src/pages/Catalog.jsx
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../features/campers/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import css from "./Catalog.module.css";
import Container from "../../components/Container/Container";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items); // ✅ обираємо саме масив
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log("Campers list:", campers);
  // console.log("Is loading:", isLoading);
  // console.log("Error:", error);
  return (
    <Container>
      <div>
        {/* <h1>Catalog</h1> */}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className={css.wrapper}>
          <div className={css.cards}>
            {Array.isArray(campers) &&
              campers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
