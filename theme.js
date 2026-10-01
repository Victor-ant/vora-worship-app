export const colors = {
  bg: '#150f24', surface: '#211838', surface2: '#2c2148',
  text: '#f6f1ff', muted: '#a89fc4', pink: '#ff3d81', amber: '#ffb627', line: '#3a2d5c',
};
export const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
