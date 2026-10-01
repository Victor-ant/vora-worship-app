import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Cover from './Cover';
import { colors, fmt } from '../theme';

export default function TrackRow({ track, active, saved, onPlay, onToggleSave }) {
  return (
    <Pressable onPress={onPlay} accessibilityRole="button" accessibilityLabel={`Play ${track.title} by ${track.artist}`}
      style={[s.row, active && s.active]}>
      <Cover c={track.c} size={52} />
      <View style={s.info}>
        <Text style={s.title} numberOfLines={1}>{track.title}</Text>
        <Text style={s.sub} numberOfLines={1}>{track.artist} · {track.genre}</Text>
      </View>
      <Text style={s.dur}>{fmt(track.duration)}</Text>
      <Pressable onPress={onToggleSave} hitSlop={8} style={[s.dl, saved && s.dlOn]}>
        <Text style={s.dlText}>{saved ? 'Saved' : 'Download'}</Text>
      </Pressable>
    </Pressable>
  );
}
const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 8, borderRadius: 14, backgroundColor: colors.surface, marginBottom: 6 },
  active: { borderWidth: 2, borderColor: colors.pink },
  info: { flex: 1 },
  title: { color: colors.text, fontWeight: '700', fontSize: 16 },
  sub: { color: colors.muted, fontSize: 13, marginTop: 2 },
  dur: { color: colors.muted, fontSize: 13 },
  dl: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 99, borderWidth: 1.5, borderColor: colors.line },
  dlOn: { backgroundColor: colors.pink, borderColor: colors.pink },
  dlText: { color: colors.text, fontSize: 12, fontWeight: '600' },
});
