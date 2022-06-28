import React from 'react';
import Map from './components/Map';
import styled from 'styled-components';
import { useStore } from './stores/RootStore';
import { observer } from 'mobx-react-lite';

const Info = styled.p`
  position: absolute;
  z-index: 100;
  top: 15px;
  left: 60px;
  background-color: black;
  color: white;
  padding: 10px;
  height: 120px;
  width: 200px;
`;

const App = () => {
  const { mapStore } = useStore();
  return (
    <>
      {/* HINT: you can bind to properties in the map store like this: */}
      <Info>
        <span>{`Sketch State: ${mapStore.sketchState}`}</span><br></br>
        <span>{mapStore.canFlyStatus ? `Flight Status: ${mapStore.canFlyStatus}` : ''}</span><br></br>
        <span>{mapStore.intersectionGeoArea ? `Geodesic area: ${mapStore.intersectionGeoArea} km²` : ''}</span><br></br>
        <span>{mapStore.intersectionPlanArea ? `Planar area: ${mapStore.intersectionPlanArea} km²` : ''}</span>
      </Info>
      <Map />
    </>
  );
};

// Component must be mobx observed to rerender
export default observer(App);
