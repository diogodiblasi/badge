import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Stack, NativeBaseProvider,  Button } from "native-base";


const Badge = () => {


  return <Box alignItems="center" bottom="20">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="" borderWidth="0" _dark={{
      borderColor: "",
      backgroundColor: ""
      
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: ""
    }}>
        <Stack>
          <Text bottom="-45" margin="83">
          <Button.Group isAttached colorScheme="blue" mx={{
              
            }} size="sm">
                <Button>Descrição</Button>
                <Button variant="outline">Histórico</Button>
          </Button.Group>           
            
          </Text>
        </Stack>
        <Box margin="44" bottom="5" >
          <AspectRatio  p="100" w="70%" ratio={18 / 9}>
            
            <Image  source={
            require('./assets/java.jpg')
          } alt="image" />
          </AspectRatio>
          
        </Box>
        <Stack p="7" space={3}>
          <Stack space={2}>
            <Heading bottom ="25" size="xl" ml="-1">
              JAVA
            </Heading>
          </Stack>
          <Text fontWeight="700" bottom="25">
            Java é uma linguagem de programação orientada a objetos
          </Text>
          <Stack>
            <Text fontWeight="700" w="45%" ml="160">
            <Button
                bottom="20"
                isDisabled={true}
                _text={{
                  color: 'black', 
                  fontWeight: 'bold',
                  
                }}
              >
                EVOLUIR BADGE
              </Button>
            </Text>
          </Stack>

          
        </Stack>
      </Box>
    </Box>;
};

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
        {Badge()}
        
       <StatusBar style="auto" />
    </View>

    </NativeBaseProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding:0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
});

