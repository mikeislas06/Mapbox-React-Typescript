import { useEffect, useReducer } from 'react';

import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { Feature, PlacesResponse } from '../../interfaces/places';

import { placesReducer } from './places.reducer';
import { PlacesContext } from './PlacesContext';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation()
      .then((lngLat) => dispatch({ type: 'setUserLocation', payload: lngLat }))
      .catch((err) => console.log(err));
  }, []);

  const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });

      return [];
    }
    if (!state.userLocation) throw new Error('User location not found');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,

        // Methods
        searchPlacesByQuery,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;
