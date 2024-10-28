//#region Common import
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
//#endregion Common import

//#region Pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
//#endregion Pages

//#region Components
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Features = lazy(() => import("./components/Features/Features"));
//#endregion Components

//#region Application
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
//#endregion Application

export default App;