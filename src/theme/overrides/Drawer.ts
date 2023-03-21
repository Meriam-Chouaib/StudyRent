export function Drawer() {
  const drawerWidth = 400;
  return {
    MuiDrawer: {
      root: {
        width: drawerWidth,
        flexShrink: 0,
      },
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    },
  };
}
