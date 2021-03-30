import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';


import { paddingSizes, fontSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item }) => {
  return (
    <Text key={item.key} style={styles.historyItem(item.status)}>
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>What we focussed on</Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <View style={styles.clearContainer}>
            <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: paddingSizes.md,
  },
});