import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center tilt">
        <span className="mark">Slicemasters on</span>{' '}
      </h2>
      <p>Standing by, ready to slice you up</p>
      {!slicemasters && <LoadingGrid count="4" />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center tilt">
        <span className="mark">Hot slices</span>{' '}
      </h2>
      <p>Come on by</p>
      {!hotSlices && <LoadingGrid count="4" />}
      {hotSlices && !hotSlices?.length && <p>Nothing in the Case</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  console.log(slicemasters, hotSlices);
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}

export default HomePage;
