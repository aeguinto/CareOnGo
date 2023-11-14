import {
  Box,
  Text,
  Center,
  Spacer,
  Stack,
  Input,
  Icon,
  Button,
  VStack,
} from "native-base";
import {
  TouchableOpacity,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const User = "User";
  const Pass = "User123";

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = (emailOrUsername, password) => {
    // Periksa apakah email/username dan password sesuai
    if (emailOrUsername.trim() === "" || password.trim() === "") {
      Alert.alert(
        "Error",
        "Mohon isi semua kolom password."
      )
    } 
    else if(emailOrUsername !== "User") {
      Alert.alert(
        "Error",
        "Email tidak cocok."
      );
    }
    
    else if(password !== "User123") {
      Alert.alert(
        "Error",
        "Password tidak cocok."
      );
    }

    else if(emailOrUsername === "User" && password === "User123") {
      Alert.alert("Success", "Akun anda berhasil login")
      navigation.replace("Tabs");
    }
    
    else {
      
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Box flex={1}>
        <Center>
          <Spacer mt="20">
            <Text fontSize={32} color={"#0082f7"} fontWeight={"bold"}>
              Login here
            </Text>
          </Spacer>
          <Spacer mt="6">
            <Text
              fontSize={20}
              maxW={250}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Welcome back, you've been missed!
            </Text>
          </Spacer>

          <Spacer p="18" mt="5">
            <Stack space={4} w="100%" alignItems="center">
              <Input
                w={{
                  base: "95%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={MaterialIcons}
                    name="person"
                    size={5}
                    ml="2"
                    color="black"
                  />
                }
                placeholder="Email or Username"
                placeholderTextColor={"black"}
                backgroundColor={"#E4F1FF"}
                borderWidth={0}
                rounded={6}
                value={emailOrUsername}
                onChangeText={(emailOrUsername) => setEmailOrUsername(emailOrUsername)}
              />

              <Input
                 value={password}
                 onChangeText={(password) => setPassword(password)}
                w={{
                  base: "95%",
                  md: "25%",
                }}
                type={showPassword ? "text" : "password"}
                InputLeftElement={
                  <Icon 
                    as={MaterialIcons}
                    name="lock"
                    size={5}
                    ml="2"
                    color={"black"}
                  />
                }
                InputRightElement={
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      as={MaterialIcons}
                      name={showPassword ? "visibility" : "visibility-off"}
                      size={5}
                      mr="2"
                      color="black"
                    />
                  </Pressable>
                }
                placeholder="Password"
                placeholderTextColor={"black"}
                backgroundColor={"#E4F1FF"}
                borderWidth={0}
                rounded={6}
              />
            </Stack>
          </Spacer>
        </Center>
        <Box mt={3} mr={7} alignItems="flex-end">
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
            <Text
              fontSize={14}
              variant={"link"}
              fontWeight={"bold"}
              color={"#0082f7"}
            >
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </Box>
        <TouchableOpacity
          style={{
            margin: 26,
            padding: 14,
            backgroundColor: "#0082f7",
            marginVertical: 20,
            borderRadius: 10,
            elevation: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => handleLogin(emailOrUsername, password)}
        >
          <Text
            color={"white"}
            textAlign={"center"}
            fontSize={18}
            fontWeight={"bold"}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <Center>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              fontWeight={"bold"}
              colorScheme={"light"}
              fontSize={16}
              mt={2}
              mb={10}
            >
              Create a new account
            </Text>
          </TouchableOpacity>
        </Center>
        <Center>
          <Spacer mt="36">
            <Text fontSize={16} color={"blue.700"} fontWeight={"bold"}>
              Or continue with
            </Text>
          </Spacer>
        </Center>
        <Center>
          <Box>
            <Stack
              direction={{
                base: "row",
                md: "row",
              }}
              space={4}
              mt={2}
            >
              <Button
                variant="outline"
                leftIcon={
                  <Icon
                    as={Ionicons}
                    name="logo-google"
                    size="md"
                    color="gray"
                    colorScheme="light"
                  />
                }
              ></Button>
              <Button
                variant="outline"
                endIcon={
                  <Icon
                    as={Ionicons}
                    name="logo-apple"
                    size="md"
                    color="gray"
                    colorScheme="light"
                  />
                }
              ></Button>
              <Button
                variant="outline"
                endIcon={
                  <Icon
                    as={Ionicons}
                    name="logo-facebook"
                    size="md"
                    color="gray"
                    colorScheme="light"
                  />
                }
              ></Button>
            </Stack>
          </Box>
        </Center>
      </Box>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
