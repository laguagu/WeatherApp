import React from "react";
import { View, StyleSheet, Platform, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)} /* Aina kun value vaihtuu OnValueChange function käynnistyy */
        mode="dropdown" /* //Vain androidille */
        itemStyle={{ fontSize: 12 }}
      > 
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    //Android laitteella picker liian korkealla, joten muotoillaan laitekohtaisesti picker top
    ...Platform.select({ 
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),

    left: 20,
    height: 50,
    width: 100,
  },
});
