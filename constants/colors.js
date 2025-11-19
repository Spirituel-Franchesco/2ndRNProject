// const Colors = {
//   primary500: "#72063c",
//   primary600: "#640233",
//   primary700: "#4e0329",
//   primary800: "#3b021f",
//   secondary500: "#2ecc71",
//   accent500: "#ddb52f",
//   background500: "#ecf0f1",
//   text500: "#2c3e50",
// };
// export default Colors;



// 🎯 Méthode 2 OPTIMISÉE (Si peu de différences)
// Si vous n'avez que quelques couleurs différentes entre les plateformes :
// import { Platform } from "react-native";

// const baseColors = {
//   primary500: "#72063c",
//   primary600: "#640233",
//   primary700: "#4e0329",
//   primary800: "#3b021f",
//   secondary500: "#2ecc71",
//   accent500: "#ddb52f",
//   background500: "#ecf0f1",
//   text500: "#2c3e50",
// };

// // Modifications spécifiques iOS uniquement
// const iosAdjustments = {
//   accent500: "#F39C12", // Plus vif sur iOS
//   secondary500: "#27AE60", // Vert différent
// };

// const Colors = Platform.OS === "ios" 
//   ? { ...baseColors, ...iosAdjustments }
//   : baseColors;
// export default Colors;



// 📱 Méthode 2 : Platform.select() (RECOMMANDÉE)
import { Platform } from "react-native";

const Colors = {
  primary500: Platform.select({
    ios: "#8B0A4E",
    android: "#72063c",
    default: "#72063c", // Pour web ou autres plateformes
  }),
  
  primary600: Platform.select({
    ios: "#750340",
    android: "#640233",
  }),
  
  primary700: Platform.select({
    ios: "#5A0530",
    android: "#4e0329",
  }),
  
  primary800: Platform.select({
    ios: "#450226",
    android: "#3b021f",
  }),
  
  secondary500: Platform.select({
    ios: "#27AE60",
    android: "#2ecc71",
  }),
  
  accent500: Platform.select({
    ios: "#F39C12",
    android: "#ddb52f",
  }),
  
  background500: Platform.select({
    ios: "#F5F6F7",
    android: "#ecf0f1",
  }),
  
  text500: Platform.select({
    ios: "#34495E",
    android: "#2c3e50",
  }),
};

export default Colors;