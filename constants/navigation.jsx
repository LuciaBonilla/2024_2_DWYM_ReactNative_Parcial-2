// MÓDULOS PARA EL RootLayout.
const PLANETS_MODULE = "modules/(planets)";
const TABS_MODULE = "modules/(tabs)";

// RUTAS DE (tabs)
const PLANET_INDEX_ROUTE = "modules/PlanetIndexScreen";
const CREATE_PLANET_ROUTE = "modules/CreatePlanetScreen";

// RUTAS DE (planets)
const PLANET_DETAILS_ROUTE = "modules/PlanetDetailsScreen/[planetID]";
const EDIT_PLANET_DETAILS_ROUTE = "modules/EditPlanetDetailsScreen/[planetID]"

const INITIAL_ROUTE = PLANET_INDEX_ROUTE;

// --->>>

// MÓDULOS.
const ROOT_MODULES = {
    PLANETS_MODULE,
    TABS_MODULE,
};

// RUTAS.
const TAB_ROUTES = {
    PLANET_INDEX_ROUTE,
    CREATE_PLANET_ROUTE,
};

const PLANETS_ROUTES = {
    PLANET_DETAILS_ROUTE,
    EDIT_PLANET_DETAILS_ROUTE,
};

// --->>>

// LAS CONSTANTES DE NAVEGACIÓN.
const NAVIGATION_CONSTANTS = {
    INITIAL_ROUTE,
    ROOT_MODULES,
    TAB_ROUTES,
    PLANETS_ROUTES,
};

export default NAVIGATION_CONSTANTS;