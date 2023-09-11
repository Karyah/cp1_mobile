import { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Constants from 'expo-constants';

export default function MinhasTarefas({navigation}){

    const [setTarefas, tarefas] = useState([{}])

    const tarefasIniciais = [
      {nome: 'Castelo De Monte'},
      {nome:'Juízo de Azkhar'},
      {nome: 'Diante da fúria de Okso'}
      ] 

    useEffect(() =>{
        fetch('http://localhost:8080/mision/get-all', {method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'
        }

    })
        .then(resposta => resposta.json())
        .then(json => {
            console.log(json)
            setTarefas(resposta)
        })

        .catch(()=>{
            Alert.alert('Deu Ruim')
        })
    })

    return(
      <SafeAreaView>
        <View style={styles.div}>
            <View style={styles.cabecalho}>
                <Pressable style={{backgroundColor:'pink'}} onPress={()=>navigation.goBack()}></Pressable>
                <Text style={{fontWeight:'bold'}}>Minhas Tarefas</Text>
            </View>

            <View>
                {tarefasIniciais.map((tarefa)=>{
                  return(
                    <View style={styles.componente}>

                        <Text style={{fontWeight:'bold'}}>Tarefa: {tarefa.nome}</Text>
                        <Pressable>
    <Image style={{width:'1rem', height:'1rem'}} source={require('../assets/x.png')}></Image>
                        </Pressable>
                        
                    </View>
                );
                })
                
                }
                
                {tarefas == null ?  
                  tarefas.map((tarefa)=>{
                  return(
                    <View style={styles.componente}>
                        <Text style={{fontWeight:'bold'}}>Tarefa: {tarefa.nome}</Text>
                        <Pressable onPress={deletar}>
    <Image style={{width:'1rem', height:'1rem'}} source={require('../assets/x.png')}></Image>
                        </Pressable>
                        
                    </View>
                );
                })  : 
                  console.log('Ainda não existem tarefas cadastradas no banco de dados.')
                }
              
            </View>
            
        </View> 
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  cabecalho:{
      margin:'2rem',
      textAlign:'center'
    },
    div: {
        flex:1,
        paddingTop:Constants.statusBarHeight,
    }, 
    componente:{
      display:'inline',
      justifyContent:'space-around',
      padding:'0.5rem',
      borderTop:'solid',
      borderColor:'black', 
      
    }
})