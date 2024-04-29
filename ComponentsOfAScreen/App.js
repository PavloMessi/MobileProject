import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.container2}>
      <Text style={styles.text2}>                     navbar                  </Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>
      <Text style={styles.text3}>Image/Video</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container4}>
      <Text style={styles.text4}>Section2</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container5}>
      <Text style={styles.text5}>Footer</Text>
      <StatusBar style="auto" />
    </View>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red', 
    alignItems: 'center',
    justifyContent: 'center', 
    width: 412,
    height: 700,
  },
 
  

 


  container2: {
    // flex: 1,
    backgroundColor: 'green', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 412,
    height:70,
  },
text2: {
  fontSize: 30,
  color: "white"
},


  container3: {
    // flex: 1,
    backgroundColor: 'yellow', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 412,
    height:200,
  },
  text3: {
    fontSize: 15,
    color: "pink"
  },

  container4: {
    // flex: 1,
    backgroundColor: 'purple', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 412,
    height: 300,
  },
  text4: {
    fontSize:40,
    color: "blue"
  },

  container5: {
    // flex: 1,
    backgroundColor: 'red', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 412,
    height:130,
    
  },
  text5: {
    fontSize: 69,
    color: "green"
  },
});

