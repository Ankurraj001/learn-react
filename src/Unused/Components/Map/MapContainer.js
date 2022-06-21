import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Map } from 'xbrcl';
import {
  clusterSinglePincode,
  clusterMarkerSinglePincode,
  clusterMultiPincode,
} from '../../mockData/mapData';

/**
 * Map component
 * @component
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Map component
 * @example
 * @param { number } height - height of the map container, optional.
 * @param { number } width - width of the map container, optional.
 * @param { Object } data - map data of cell ids and marker details. e.g. {pinCodeBoundaries: [['88608851bbfffff', '88608851b7fffff', '88608851b3fffff'],], pincodesInSVC: ['411017'], hubDetails: {}}
 * @param { boolean } showControls - if controls should be shown, value true/false, optional.
 * @param { Object } onCellSelect - callback function to handle cell select event, optional.
 * @param { Function } onCellHover - callback function to handle cell hovered event, optional.
 * @param { Function } onDrawShape - callback function to handle shape drawn event, accepts param mapLayer, optional.
 * @param { Function } onEditShape - callback function to handle shape edit event, accepts param mapLayer, optional.
 * @param { Function } onDeleteShape - callback function to handle shape delete event, accepts param mapLayer, optional.
 * return (
 *     <Map
 *       height={500}
 *       width={800}
 *       data={mapConfig}
 *       showControls={true}
 *       onCellSelect={cellSelectHandler}
 *       onCellHover={cellHoverHandler}
 *       onDrawShape={shapeDrawnHandler}
 *       onEditShape={shapeEditHandler}
 *       onDeleteShape={shapeDeleteHandler}
 *     />
 * )
 */

const ListHeading = styled.div`
  margin: 15px 0 10px 0;
  font-weight: bold;
  display: inline-block;
`;

const MapContainer = () => {
  const [mapConfig, setMapConfig] = useState(clusterSinglePincode);
  const cellSelectHandler = (currentCell, selectedCells) => {
    console.log('cell selected/deselected handler called ' + selectedCells);
    document.getElementById('cells-selected').innerHTML = selectedCells;
  };
  const cellHoverHandler = (hoveredCell) => {
    console.log('cell hovered handler called ' + hoveredCell);
    document.getElementById('cell-hovered').innerHTML = hoveredCell;
  };
  const shapeDrawnHandler = (mapLayer) => {
    console.log('shape drawn handler called');
  };
  const shapeEditHandler = (mapLayer) => {
    console.log('shape edit handler called');
  };
  const shapeDeleteHandler = (mapLayer) => {
    console.log('shape delete handler called');
  };

  return (
    <div>
      <h3>Map:</h3>
      <Button
        onClick={() => setMapConfig(clusterSinglePincode)}
        value='Set config 1'
      />
      <Button
        onClick={() => setMapConfig(clusterMarkerSinglePincode)}
        value='Set config 2 (with marker)'
      />
      <Button
        onClick={() => setMapConfig(clusterMultiPincode)}
        value='Set config 3 (with multi pincodes)'
      />
      <br />
      <ListHeading>Cell Hovered: </ListHeading>
      <span id='cell-hovered'></span>
      <br />
      <ListHeading>Cells Selected: </ListHeading>
      <span id='cells-selected'></span>
      <Map
        height={500}
        width={800}
        data={mapConfig}
        showControls={true}
        onCellSelect={cellSelectHandler}
        onCellHover={cellHoverHandler}
        onDrawShape={shapeDrawnHandler}
        onEditShape={shapeEditHandler}
        onDeleteShape={shapeDeleteHandler}
      />
    </div>
  );
};

export default MapContainer;
