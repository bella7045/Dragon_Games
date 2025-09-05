import React, { useState } from 'react';
import { SafeAreaView, View, text, Touchableopacity, SryleSheet, ScrollView, TextInput, Alert, ImageBackground } from 'react-native';


export default function App(){

  const [pagina, setPagina] = useState('home');
  return(
    <SafeAreaView style={StyleSheet.container}>
     <Header pagina={pagina} setPagina={setPagina} />
      <ScrollView contentContainerStyle={StyleSheet.content}>
        {pagina === 'home' && <Home />}
        {pagina === 'sobre' && <sobre />}
        {pagina === 'serviços' && <serviços />}
        {pagina === 'contato' && <contato />}
       </ScrollView> 
       <Footer />
    </SafeAreaView>
  );   
}

//Comentario aleatorio
function Header({ pagina, setPagina }) {
  return (       
    <View ste={styles.header}>
      <text style={styles.headerTitle}>Dragon_Games</text>
       <View styles={styles.nav}>
        {['home','sobre','serviços','contato'].map((p) => (
           <Touchableopacity
         key={p} 
         style={[styles.navButton, pagina === p && styles.navButtonActive]}   
         onPress={() == setPagina(P)}
        
        >
         <Text styles={styles.navButtonText}>{P.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </Touchableopacity>
      ))}
    </View>
  </View>
 );
  }

  function Home() {
    return (
      <view style={styles.section}>
        <text styles={style.title}>Seja bem-vindo á nossa empresa</text>
        <text>Somos os líderes em soluções tecnológicas para o seu negócio.</text>
        </view>
          
    );
}
function Sobre() {
  return (
    <view style={styles.section}>
      <text>Fundada em 2025, temos o compromisso de qualidade e inovação.</text>
    </view>
  )
}


function Serviços() {
  return (
    <view style={styles.section}>
      <text styles={style.title}>Nossos Serviços</text>
      <text>- Consultoria de TI</text>
      <text>- Desenvolvimento de Software</text>
      <text>- Suporte Técnico</text>
    </view>
  );
 }

 function Contato(){
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagens, setMensagens] = React.useState('');
 }

 function enviar() {
   if (!nome || !email || !mensagem){
    Alert.alert('Erro', 'Por favor preencha todos os campos');
    return;
  }
   Alert.alert('Mensagem enviada',`Obrigado, ${nome}! Retornamos em breve.`);
  setnome('');
  setEmail('');
  setMensagem('');
 }

 return (
  <View style={styles.section}>
    <text styles={style.title}>Contato</text>
    <TextInput
     style={styles.input}
     placeholder='Nome'
     value={nome}
    onChangeText={setNome}
  />
  <TextInput
   style={style.input}
   placeholder='Email'
   value={email}
   oneChangeText={setEmail}
   KeyboardType="email-address"
  />
  <TextInput
   style={[styles.input, {height: 100}]}
   placeholder="Mensagem"
   value={mensagem}
   oneChangeText={setMensagem}
   multiline
  />
  <TouchableOpacity style={styles.button} onPress={enviar}>
 <text style={styles.buttonText}>Enviar</text>
 </TouchableOpacity>
  </View>
 );
  
 
function Footer(){
    return (
      <View style={styles.footer}>
        <Text style={{color: 'whiter'}}>2025 minha Empresa. Todos reservados.</Text>
      </View>
    );
   }
   const styles = StylesSheet.create({
    container:{
      flex: 1,
      ImageBackground: '#f4f7fa'
    },
    header: {
      backgroudcolor: '#004080',
      padding: 40,
      alignContent: 'center',
      alignItems: 'center'
    },
    headerTitle: {
      color: 'white',
      fontSize: 24,
      Fontweight: 'bold',
      marginBottom: 12
    },
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    navButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 4
    },
    navButtonActive: {
      backgroudcolor: '#0066cc'
    },
    navButtonText: {
      color: 'white',
      Fontweight: 'bold'
    },
    content: {
      padding: 20,
      flexGrow: 1
    },
    section: {
      marginBottom: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    input: {
      backgroudcolor: 'White',
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 4,
      marginBottom: 15, 
    },
    button: {
      backgroudcolor: '#004080',
      paddingVertical: 12,
      borderRadius: 6,
      alignItems: 'conter',
    },
    button: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
    },
    footer: {
      backgroudcolor: '#00264d',
      padding: 15,
      alignItems: 'center'
    },
   });


