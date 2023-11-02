import { useContext } from "react";
import { Box, ScrollView, Text, Center, Button } from "native-base";
import colors from "../component/theme";
import { ThemeContext } from "../component/themeContext";
import { useNavigation } from "@react-navigation/native";

const PesanScreen = () => {
  // const theme = { mode: "dark" };
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const navigation = useNavigation();

  return (
    <Box flex={1} backgroundColor={"#f4f4f4"}>
      <ScrollView flex={1} backgroundColor={activeColors.primary}>
        <Box mt={96}>
          <Center>
            <Text color={activeColors.tint}>Ini adalah halaman Chat</Text>
            <Button onPress={() => navigation.navigate('RoomChat')}>
              <Text>Click Here</Text>
            </Button>
          </Center>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PesanScreen;

