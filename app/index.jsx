import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../scripts/appContext';

//A palavra-chave import pode ser chamada como uma função para importar dinamicamente um módulo.

//O export default é uma funcionalidade poderosa do Node. js que permite exportar um único valor como o valor padrão de um módulo.

export default function TelaInicio() {
    const { cidade, setCidade } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Picker //para agrupar produtos
                selectedValue={cidade}
                onValueChange={(itemValue) => setCidade(itemValue)}
                style={styles.picker}
            >
                {cidades.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                ))}
            </Picker>
            

            {cidade && (
                <Link href="/previsao" style={styles.button}>
                    <Text style={styles.buttonText}>Ir para a próxima tela</Text>
                </Link>
            )}
        </View>
    );
}

//A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é
//imutável, apenas que a variável constante não pode ser alterada ou retribuída.

const  cidades = [
    { label: 'Aracaju', value: 'Aracaju' },
    { label: 'Belém', value: 'Belém' },
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Boa Vista', value: 'Boa Vista' },
    { label: 'Brasília', value: 'Brasília' },
    { label: 'Campo Grande', value: 'Campo Grande' },
    { label: 'Cuiabá', value: 'Cuiabá' },
    { label: 'Curitiba', value: 'Curitiba' },
    { label: 'Florianópolis', value: 'Florianópolis' },
    { label: 'Fortaleza', value: 'Fortaleza' },
    { label: 'Goiânia', value: 'Goiânia' },
    { label: 'João Pessoa', value: 'João Pessoa' },
    { label: 'Macapá', value: 'Macapá' },
    { label: 'Maceió', value: 'Maceió' },
    { label: 'Manaus', value: 'Manaus' },
    { label: 'Natal', value: 'Natal' },
    { label: 'Palmas', value: 'Palmas' },
    { label: 'Porto Alegre', value: 'Porto Alegre' },
    { label: 'Porto Velho', value: 'Porto Velho' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Rio Branco', value: 'Rio Branco' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Salvador', value: 'Salvador' },
    { label: 'São Luís', value: 'São Luís' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Teresina', value: 'Teresina' },
    { label: 'Vitória', value: 'Vitória' },
];

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 400,
    },
    picker: {
        height: 50,
        width: 200,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
