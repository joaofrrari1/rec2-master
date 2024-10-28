import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext';

const telaPrevisao = () => {
    const { cidade } = useContext(AppContext);
    const [tempo, setTempo] = useState(null);

    const obterPrevisaoDoTempo = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e&units=metric&lang=pt_br`);
            const data = await response.json();
            if (response.ok) {
                setTempo({
                    nome: data.name,
                    temperatura: data.main.temp,
                    vento: data.wind.speed,
                    umidade: data.main.humidity,
                    descricao: data.weather[0].description,
                });
            } else {
                console.error("Erro na API: ", data.message);
            }
        } catch (error) {
            console.error("Erro ao obter previsão do tempo:", error);
        }
    };

    useEffect(() => {
        if (cidade) obterPrevisaoDoTempo();
    }, []); // Chama a função apenas uma vez ao abrir a tela

    return (
        <View style={styles.container}>
            {tempo ? (
                <View style={styles.tempoView}>
                    <Text style={styles.text}>Cidade: {tempo.nome}</Text>
                    <Text style={styles.text}>Temperatura: {tempo.temperatura}°C</Text>
                    <Text style={styles.text}>Velocidade do Vento: {tempo.vento} m/s</Text>
                    <Text style={styles.text}>Umidade: {tempo.umidade}%</Text>
                    <Text style={styles.text}>Clima: {tempo.descricao}</Text>
                </View>
            ) : (
                <Text style={styles.text}>Carregando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    tempoView: {
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default telaPrevisao;
