export const posteriorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return { ...state, cart: [...state.cart, action.product] };
    }
    case 'SET_ARTWORKS': {
      return { ...state, artworks: action.artworks };
    }
    case 'SET_SOURCES': {
      return { ...state, sources: action.sources };
    }
    case 'SET_ARTISTS': {
      return { ...state, artists: action.artists };
    }
    case 'SET_YEARS': {
      return { ...state, years: action.years };
    }
    case 'SET_COLORS': {
      return { ...state, colors: action.colors };
    }

    case 'SET_PRICE_FILTER': {
      return { ...state, filter: { ...state.filter, range: action.range } };
    }
    case 'SET_SIZE_FILTER': {
      return { ...state, filter: { ...state.filter, size: action.size } };
    }
    case 'SET_SOURCE_FILTER': {
      if (state.filter.source.includes(action.source)) {
        let removedSources = state.filter.source.filter(
          (source) => source !== action.source
        );
        return {
          ...state,
          filter: { ...state.filter, source: removedSources },
        };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          source: [...state.filter.source, action.source],
        },
      };
    }
    case 'CLEAR_SOURCE_FILTER': {
      return { ...state, filter: { ...state.filter, source: [] } };
    }
    case 'SET_YEAR_FILTER': {
      if (state.filter.year.includes(action.year)) {
        let removedYears = state.filter.year.filter(
          (year) => year !== action.year
        );
        return { ...state, filter: { ...state.filter, year: removedYears } };
      }
      return {
        ...state,
        filter: { ...state.filter, year: [...state.filter.year, action.year] },
      };
    }
    case 'CLEAR_YEAR_FILTER': {
      return { ...state, filter: { ...state.filter, year: [] } };
    }
    case 'SET_ARTIST_FILTER': {
      if (state.filter.color.includes(action.artist)) {
        let removedArtists = state.filter.artist.filter(
          (artist) => artist !== action.artist
        );
        return { ...state, filter: { ...state.filter, color: removedArtists } };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          artist: [...state.filter.artist, action.artist],
        },
      };
    }
    case 'CLEAR_ARTIST_FILTER': {
      return { ...state, filter: { ...state.filter, artist: [] } };
    }
    case 'SET_ORIENTATION_FILTER': {
      if (state.filter.orientation.includes(action.orientation)) {
        let removedOrientations = state.filter.orientation.filter(
          (orientation) => orientation !== action.orientation
        );
        return {
          ...state,
          filter: { ...state.filter, orientation: removedOrientations },
        };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          orientation: [...state.filter.orientation, action.orientation],
        },
      };
    }
    case 'SET_SEARCH_FILTER': {
      return { ...state, filter: { ...state.filter, term: action.term } };
    }
    case 'SET_COLOR_FILTER': {
      if (state.filter.color.includes(action.color)) {
        let removedColors = state.filter.color.filter(
          (color) => color !== action.color
        );
        return { ...state, filter: { ...state.filter, color: removedColors } };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          color: [...state.filter.color, action.color],
        },
      };
    }
    case 'CLEAR_COLOR_FILTER': {
      return { ...state, filter: { ...state.filter, color: [] } };
    }
    case 'SORT_ARTWORKS': {
      return { ...state, filter: { ...state.filter, sort: action.sort } };
    }
    case 'CLEAR_ALL_FILTERS': {
      return {
        ...state,
        filter: {
          range: {
            min: 0,
            max: 9,
          },
          size: {
            min: 0,
            max: 4,
          },
          source: [],
          artist: [],
          color: [],
          year: [],
          orientation: [],
          sort: 'artist',
        },
      };
    }
  }
};
