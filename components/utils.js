/**
 * Creates a page URL based on the page name
 * Maps page names to their respective routes
 * @param {string} pageName - The name of the page (e.g., 'Home', 'Contact', 'Menu')
 * @returns {string} - The URL path for the page
 */
export const createPageUrl = (pageName) => {
  // Define the page routes mapping
  const routeMap = {
    'Home': '/',
    'About': '/About',
    'Services': '/Serve',
    'Serve': '/Serve',
    'Menu': '/Menu',
    'Gallery': '/Gallery',
    'Contact': '/Contact',
  };

  // Return the corresponding route or default to home
  return routeMap[pageName] || '/';
};
