import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated, StyleSheet } from 'react-native';
import { colors, fmt } from '../theme';

function Bar({ playing, i, color }) {
  const v = useRef(new Animated.Value(0.15)).current;
  useEffect(() => {
    if (!playing) { v.stopAnimation(); Animated.timing(v, { toValue: 0.15, duration: 200, useNativeDriver: false }).start(); return; }
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(v, { toValue: 0.9, duration: 500 + (i % 4) * 150, useNativeDriver: false }),
      Animated.timing(v, { toValue: 0.15, duration: 500 + (i % 3) * 200, useNativeDriver: false }),
    ]));
    loop.start();
    return () => loop.stop();
  }, [playing]);
  const h = v.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });
  return <Animated.View style={{ flex: 1, height: h, backgroundColor: color, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />;
}

export default function NowPlaying({ track, playing, pos, onToggle, onNext, onPrev }) {
  const bg = track ? track.c[0] : colors.surface2;
  return (
    <View style={s.card}>
      <View style={[s.art, { backgroundColor: bg }]}>
        {track && Array.from({ length: 16 }).map((_, i) => <Bar key={i} i={i} playing={playing} color="rgba(255,255,255,0.85)" />)}
      </View>
      <Text style={s.title}>{track ? track.title : 'Pick a song'}</Text>
      <Text style={s.artist}>{track ? track.artist : 'Tap any track below'}</Text>
      <View style={s.track}><View style={[s.fill, { width: track ? `${(pos / track.duration) * 100}%` : '0%' }]} /></View>
      <View style={s.times}><Text style={s.time}>{fmt(pos)}</Text><Text style={s.time}>{fmt(track ? track.duration : 0)}</Text></View>
      <View style={s.ctrl}>
        <Pressable onPress={onPrev} style={s.sm} accessibilityLabel="Previous song"><Text style={s.icon}>⏮</Text></Pressable>
        <Pressable onPress={onToggle} style={s.pp} accessibilityLabel={playing ? 'Pause' : 'Play'}><Text style={[s.icon, { fontSize: 26 }]}>{playing ? '❚❚' : '▶'}</Text></Pressable>
        <Pressable onPress={onNext} style={s.sm} accessibilityLabel="Next song"><Text style={s.icon}>⏭</Text></Pressable>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 28, padding: 20, borderWidth: 1, borderColor: colors.line },
  art: { aspectRatio: 1, borderRadius: 18, flexDirection: 'row', alignItems: 'flex-end', gap: 5, padding: 16 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 16 },
  artist: { color: colors.muted, marginTop: 2, marginBottom: 12 },
  track: { height: 6, borderRadius: 9, backgroundColor: colors.line, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.amber },
  times: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  time: { color: colors.muted, fontSize: 12 },
  ctrl: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 24, marginTop: 8 },
  sm: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  pp: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.pink, alignItems: 'center', justifyContent: 'center' },
  icon: { color: colors.text, fontSize: 20 },
});
