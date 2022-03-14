import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './screens';

import './styles.css';

const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
