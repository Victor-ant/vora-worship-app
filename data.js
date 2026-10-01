export const TRACKS = [
  { id: '1', title: 'Lagos Sunrise', artist: 'Adaeze Brown', genre: 'Afrobeats', duration: 196, c: ['#ff3d81', '#ffb627'] },
  { id: '2', title: 'Slow Dance in Harmattan', artist: 'Tobi Okoro', genre: 'R&B', duration: 223, c: ['#7b2ff7', '#f107a3'] },
  { id: '3', title: 'Kogi Nights', artist: 'Mama Ibe & The Riverside', genre: 'Highlife', duration: 241, c: ['#0f9b8e', '#ffb627'] },
  { id: '4', title: 'Paper Planes Over Abuja', artist: 'Ngozi Vale', genre: 'Pop', duration: 188, c: ['#3a86ff', '#ff3d81'] },
  { id: '5', title: 'Gbedu Machine', artist: 'DJ Kelechi', genre: 'Afrobeats', duration: 207, c: ['#ff6b35', '#7b2ff7'] },
  { id: '6', title: 'Midnight Suya', artist: 'Tobi Okoro', genre: 'R&B', duration: 215, c: ['#c9184a', '#590d22'] },
  { id: '7', title: 'Sunday Guitar', artist: 'Emeka Dara', genre: 'Highlife', duration: 262, c: ['#2d6a4f', '#ffb627'] },
  { id: '8', title: 'Static Hearts', artist: 'Ngozi Vale', genre: 'Pop', duration: 194, c: ['#00b4d8', '#7b2ff7'] },
];
export const GENRES = ['All', ...new Set(TRACKS.map((t) => t.genre))];
