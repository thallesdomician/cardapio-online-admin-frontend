export function toggleSidebar({ active_sidebar }) {
  return {
    type: '@template/TOGGLE_SIDEBAR',
    payload: {
      active_sidebar,
    },
  };
}
