import { Text, View, StyleSheet, FlatList } from 'react-native';
import Action from '../../components/Action';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/09/2023',
        type: 0 // despeses
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2.500,00',
        date: '17/09/2023',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '17/09/2023',
        type: 1 // receita
    },
]

export default function Home() {
  return (
    <View style={ styles.container }>
        <Header name='Queonias'/>
        <Balance saldo='9.250,90' gastos="-527,00"/>
        <Action />
        <Text style={ styles.title }>Últimas movimentações</Text>

        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id) }
            showsHorizontalScrollIndicator={ false }
            renderItem={ ({ item }) => <Movements data={ item } /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});

