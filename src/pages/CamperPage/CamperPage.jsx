import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../features/campers/campersSlice";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperSpecs from "../../components/CamperSpecs/CamperSpecs";
import css from "./CamperPage.module.css";
import Container from "../../components/Container/Container";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const campers = useSelector((state) => state.campers.items);
  const isLoading = useSelector((state) => state.campers.isLoading);

  // Ініціалізуємо activeTab з URL хеша, дефолт "features"
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash === "reviews" ? "reviews" : "features";
  });

  useEffect(() => {
    if (!campers.length) {
      dispatch(fetchCampers());
    }
  }, [dispatch, campers]);

  useEffect(() => {
    // Слухаємо зміну хеша (коли користувач змінює вручну або переходить по посиланню)
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "features" || hash === "reviews") {
        setActiveTab(hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const camper = campers.find((c) => c.id === id);

  if (isLoading || !camper) {
    return <div className={css.loading}>Loading...</div>;
  }

  // Обробник кліку: змінює хеш і стан вкладки
  const handleTabClick = (tab) => (e) => {
    e.preventDefault();
    window.location.hash = tab;
    setActiveTab(tab);
  };

  return (
    <Container>
      <div className={css.wrapper}>
        <CamperInfo camper={camper} />

        <nav className={css.nav}>
          <a
            href="#features"
            className={activeTab === "features" ? css.active : ""}
            onClick={handleTabClick("features")}
          >
            Features
          </a>
          <a
            href="#reviews"
            className={activeTab === "reviews" ? css.active : ""}
            onClick={handleTabClick("reviews")}
          >
            Reviews
          </a>
        </nav>

        <div className={css.divider} />

        <div className={css.bWrapper}>
          <div className={css.frWrapper}>
            {activeTab === "features" && (
              <div className={css.frBackW}>
                <CamperFeatures camper={camper} />
                <h3 className={css.titleFeatures}>Vehicle details</h3>
                <div className={css.fDivider} />
                <CamperSpecs camper={camper} />
              </div>
            )}
            {activeTab === "reviews" && (
              <div className={css.bWrapper}>
                {/* Тут можна рендерити CamperReviews або інший контент */}
              </div>
            )}
          </div>
          <div className={css.formWrapper}>xx</div>
        </div>
      </div>
    </Container>
  );
};

export default CamperPage;
