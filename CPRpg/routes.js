import Home from './pages/Home';
import MinhasTarefas from './pages/MinhasTarefas';
import AdicionarTarefa from './pages/AdicionarTarefa';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Routes = () => {
  
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="MinhasTarefas" component={MinhasTarefas}/>
            <Stack.Screen name="AdicionarTarefa" component={AdicionarTarefa}/>
           
    
        </Stack.Navigator>
    );
}

export default Routes;