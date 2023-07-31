import React from "react";
import Filters from "../../Common/Filters/index";
import DeliveryCollections from "./DeliveryCollections/index";
import TopBrands from "./TopBrands";
import ExploreSection from "../../Common/ExploreSection";
import { restaurants } from "../Data/restaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="bx bx-filter-alt"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="bx bx-sort"></i>,
  },
  {
    id: 6,
    title: "Greate Offers",
    icon: <i class="bx bxs-offer"></i>,
  },
];

export default function Delivery() {
  return (
    <>
      <div className="max-width">
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurants}
        collectionName="Delivery Restaurants in Banglore"
      />
    </>
  );
}
