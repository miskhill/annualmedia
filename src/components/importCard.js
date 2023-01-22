import React, { useState } from "react";
import BookUploadCard from "./upload/bookUploadCard";
import MovieUploadCard from "./upload/movieUploadCard";
import SeriesUploadCard from "./upload/seriesUploadCard";
import TabNavItem from './tabNavItem';
import TabContent from './tabContent';

const ImportCard = () => {
  const [activeTab, setActiveTab] = useState("movie");

  return (
    <>
      <div className='Tabs'>
        <ul className='nav'>
          <TabNavItem
            title='Movie'
            id='movie'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title='Series'
            id='series'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title='Book'
            id='book'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

        <div className='outlet'>
          <TabContent id='movie' activeTab={activeTab}>
            <MovieUploadCard />
          </TabContent>
          <TabContent id='series' activeTab={activeTab}>
            <SeriesUploadCard />
          </TabContent>
          <TabContent id='book' activeTab={activeTab}>
            <BookUploadCard />
          </TabContent>
        </div>
      </div>
    </>
  );
};

export default ImportCard;
