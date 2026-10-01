import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Cover from './Cover';
import { colors } from '../theme';

export default function PlayerBar({ track, playing, onToggle }) {
  return (
    <View style={s.bar}>
      {track ? <Cover c={track.c} size={44} /> : <View style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: colors.surface2 }} />}
      <View style={{ flex: 1 }}>
        <Text style={s.t} numberOfLines={1}>{track ? track.title : 'Nothing playing'}</Text>
        <Text style={s.a} numberOfLines={1}>{track ? track.artist : 'Choose a song to start'}</Text>
      </View>
      <Pressable onPress={onToggle} style={s.btn} accessibilityLabel={playing ? 'Pause' : 'Play'}>
        <Text style={{ color: '#fff', fontSize: 16 }}>{playing ? '❚❚' : '▶'}</Text>
      </Pressable>
    </View>
  );
}
const s = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 20, paddingTop: 12, paddingBottom: 28, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.line },
  t: { color: colors.text, fontWeight: '700' },
  a: { color: colors.muted, fontSize: 13 },
  btn: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.pink, alignItems: 'center', justifyContent: 'center' },
});
