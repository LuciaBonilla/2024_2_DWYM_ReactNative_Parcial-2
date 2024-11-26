// MÓDULOS PARA EL RootLayout.
const DESTINATIONS_MODULE = "modules/(destinations)";
const TABS_MODULE = "modules/(tabs)";

// RUTAS DE (tabs)
const DESTINATIONS_INDEX_ROUTE = "modules/DestinationsIndexScreen";
const CREATE_DESTINATION_ROUTE = "modules/CreateDestinationScreen";

// RUTAS DE (destinations)
const EDIT_DESTINATION_DETAILS_ROUTE = "modules/EditDestinationDetailsScreen/[destinationID]"

const INITIAL_ROUTE = DESTINATIONS_INDEX_ROUTE;

// --->>>

// MÓDULOS.
const ROOT_MODULES = {
    DESTINATIONS_MODULE,
    TABS_MODULE,
};

// RUTAS.
const TABS_ROUTES = {
    DESTINATIONS_INDEX_ROUTE,
    CREATE_DESTINATION_ROUTE,
};

const DESTINATIONS_ROUTES = {
    EDIT_DESTINATION_DETAILS_ROUTE,
};

// --->>>

// LAS CONSTANTES DE NAVEGACIÓN.
const NAVIGATION_CONSTANTS = {
    INITIAL_ROUTE,
    ROOT_MODULES,
    TABS_ROUTES,
    DESTINATIONS_ROUTES,
};

export default NAVIGATION_CONSTANTS;