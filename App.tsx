import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Box, Heading, AspectRatio, Text, Image, Stack, NativeBaseProvider,  Button } from "native-base";
import { API } from './http/Http';
import { useEffect, useState } from 'react';
import { Badge } from './model/badge';

const GetBadge = () => {
  const [badge, setBadge] = useState < Badge > (new Badge())
  
  

  useEffect(() => {
   
      
      API.get(`Badge/5`)
      .then((badge)=>{
        console.log(badge.data)
        setBadge(badge.data)

      })
      .catch((error)=>{
        console.log(error)
      })

  })


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
            {uri: `data:image/png;base64,${badge.imagem}`}
          } alt="imagem" />
          </AspectRatio>
          
        </Box>
        <Stack p="7" space={3}>
          <Stack space={2}>
            <Heading bottom ="23" size="md" ml="-1">
            {badge.descricao}
            </Heading>
          </Stack>
          <Text fontWeight="700" bottom="25">
           {badge.badgeNivel?.descricao}
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
        {GetBadge()}
        
       <StatusBar style="auto" />
    </View>

    </NativeBaseProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
});

