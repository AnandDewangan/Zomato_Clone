import React from 'react';
import {nightlife} from "../Data/nightlife.js";
import Collection from "../../Common/Collections/index.js";
import Filters from "../../Common/Filters/index.js";
import ExploreSection from "../../Common/ExploreSection/index.js";

const collectionList = [
  {
    id: 6,
    titile: '26 Serene Rooftop Places',
    cover: 'https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg?output-format=webp',
    places: '27 Places'
  },
  {
    id: 7,
    titile: '18 Newly Opened Restaurants',
    cover: 'https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg?output-format=webp',
    places: '20 Places'
  },
  {
    id: 8,
    titile: '13 Best Korean Restaurants',
    cover: 'https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png?output-format=webp',
    places: '13 Places'
  },
  {
    id: 9,
    titile: 'Winners of Zomato Restaurant Awards',
    cover: 'https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp',
    places: '32 Places'
  },
  {
    id: 10,
    titile: '21 Lit Party Places',
    cover: 'https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp',
    places: '21 Places'
  },
  
  {
    id: 1,
    titile: '10 Unique Dining Experiences',
    cover: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp',
    places: '10 Places'
  },
  {
    id: 2,
    titile: '20 Blissful Breakfast Places',
    cover: 'https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png?output-format=webp',
    places: '20 Places'
  },
  {
    id: 3,
    titile: '21 Romantic Dining Places',
    cover: 'https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg?output-format=webp',
    places: '19 Places'
  },
  {
    id: 4,
    titile: '24 Great Cafes',
    cover: 'https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg?output-format=webp',
    places: '25 Places'
  },
  {
    id: 5,
    titile: '10 Celeb-loved Places',
    cover: 'https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png?output-format=webp',
    places: '10 Places'
  }
];

const nightlifeFilters = [
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
export default function Nightlife() {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
      <Filters filtersList={nightlifeFilters} />
      </div>
      <ExploreSection list={ nightlife } collectionName="Nightlife Restaurants in Delhi NCR"/>
    </div>
  )
}
