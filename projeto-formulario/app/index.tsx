import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Por favor, preencha nome e email!');
      return;
    }

    Alert.alert(
      'Cadastro Realizado!',
      `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
      [{ text: 'OK', onPress: limparFormulario }]
    );
  };

  const limparFormulario = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>
        <Text style={styles.subtitulo}>Preencha seus dados abaixo</Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Nome Completo *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>E-mail *</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem aqui..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={4}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.botaoEnviar} onPress={handleSubmit}>
          <Text style={styles.textoBotaoEnviar}>Enviar Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={limparFormulario}>
          <Text style={styles.textoBotaoLimpar}>Limpar Campos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.rodape}>Desenvolvido com React Native + Expo 🚀</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  formulario: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoEnviar: {
    backgroundColor: '#4a90e2',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoEnviar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#4a90e2',
  },
  textoBotaoLimpar: {
    color: '#4a90e2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  rodape: {
    fontSize: 14,
    color: '#666',
  },
});