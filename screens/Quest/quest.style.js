import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constant/theme";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Horizontally align buttons
    padding: 10,
  },
  button: {
    backgroundColor: COLORS.blue, // Background color
    padding: 10, // Padding around the button content
    borderRadius: 5, // Border radius for rounded corners
    marginHorizontal: 10, // Margin between buttons
  },
  buttonText: {
    color: '#FFF', // Text color
    fontSize: 16, // Font size
    textAlign: 'center', // Center-align text
  },
  contentBox: {
    width: "80%", 
    height: 300,
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: COLORS.black, 
  },
  questContainer: {
    flexDirection: 'row', 
    padding: 12,
  },
  questText: {
    fontSize: 14, 
    fontWeight: 'bold',
  },
  xpButton: {
    padding: 5, // Padding around the button content
    borderRadius: 5, // Border radius for rounded corners
    marginHorizontal: 10, // Margin between button
    marginLeft: 'auto'
  },
  container: {
    width: "100%",
    alignItems: 'center',
  },
});

export default styles;
