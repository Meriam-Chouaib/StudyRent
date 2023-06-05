import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';
import houseIcon from '../../assets/icons/home.png';
import userIconMarker from '../../assets/icons/user_marker_icon.png';

interface LeafletRoutingMachineProps {
  positions: L.LatLngTuple[];
}
const houseIconUrl = houseIcon;

const LeafletRoutingMachine = ({ positions }: LeafletRoutingMachineProps) => {
  const map = useMap();
  const DefaultIcon = L.icon({
    iconUrl: houseIconUrl,
    iconSize: [40, 40],
  });

  useEffect(() => {
    L.Marker.prototype.options.icon = DefaultIcon;

    L.Routing.control({
      waypoints: [
        L.latLng(positions[0][0], positions[0][1]),
        L.latLng(positions[1][0], positions[1][1]),
      ],
      lineOptions: {
        styles: [{ color: 'blue', weight: 4, opacity: 0.7 }],
        extendToWaypoints: true,
        missingRouteTolerance: 100,
      },
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    }).addTo(map);
  }, []);
  return null;
};

export default LeafletRoutingMachine;
