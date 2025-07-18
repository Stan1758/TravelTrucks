import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../features/campers/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import css from "./Catalog.module.css";
import Container from "../../components/Container/Container";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";

const ITEMS_PER_PAGE = 4;

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.allItems); // Всі кемпери
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const filters = useSelector((state) => state.filters);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // ✅ Завантажити всі кемпери при монтуванні
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // 🔍 Локальна фільтрація
  const filteredCampers = campers.filter((camper) => {
    const { location, amenities, form } = filters;

    if (location && camper.location !== location) return false;
    if (form && camper.form !== form) return false;

    if (Array.isArray(amenities)) {
      if (amenities.includes("AC") && !camper.AC) return false;
      if (
        amenities.includes("automatic") &&
        camper.transmission !== "automatic"
      )
        return false;
      if (amenities.includes("kitchen") && !camper.kitchen) return false;
      if (amenities.includes("radio") && !camper.radio) return false;
      if (amenities.includes("bathroom") && !camper.bathroom) return false;
    }

    return true;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={css.catalogWrapper}>
        <div className={css.filterWrapper}>
          <FiltersPanel
            resetVisibleCount={() => setVisibleCount(ITEMS_PER_PAGE)}
          />
        </div>
        <div className={css.wrapper}>
          <div className={css.cards}>
            {filteredCampers.slice(0, visibleCount).map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </div>
          {visibleCount < filteredCampers.length && (
            <button className={css.loadMoreBtn} onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
