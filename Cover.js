import React from 'react';
import { View } from 'react-native';

// Two-tone cover art without extra dependencies
export default function Cover({ c, size, radius = 10 }) {
  return (
    <View style={{ width: size, height: size, borderRadius: radius, backgroundColor: c[0], overflow: 'hidden' }}>
      <View style={{ position: 'absolute', right: -size * 0.25, bottom: -size * 0.25, width: size * 0.9, height: size * 0.9, borderRadius: size, backgroundColor: c[1], opacity: 0.85 }} />
    </View>
  );
}
