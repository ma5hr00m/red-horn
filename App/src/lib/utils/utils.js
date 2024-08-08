export function getRoutesWithIndex(config) {
  return config.navigation.map((route, index) => ({ ...route, index }));
}

export function updateTitle(pathname, routes) {
  let currentTitle;
  const route = routes.find((route) => route.href === pathname);
  currentTitle = route ? route.title : null;
}

export function updateTransitions(currentRouteIndex, targetRouteIndex) {
  let enterTransition;
	let exitTransition;

  const isUndefined = currentRouteIndex === undefined || targetRouteIndex === undefined;
  const isForward = currentRouteIndex < targetRouteIndex;

  enterTransition = { x: isUndefined || isForward ? 100 : -100, duration: 500, delay: 300 };
  exitTransition = { x: isUndefined || isForward ? -100 : 100, duration: 300 };

  return {
    enterTransition,
    exitTransition
  };
}