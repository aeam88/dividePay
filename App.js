/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const SCREEN_SIZE = Dimensions.get('window');

const App = () => {

  const [personas, setPersonas] = useState(2);
  const [propina, setPropina] = useState(10);
  const [propinaUno, setPropinaUno] = useState(false);
  const [propinaDos, setPropinaDos] = useState(true);
  const [propinaTres, setPropinaTres] = useState(false);
  const [propinaCuatro, setPropinaCuatro] = useState(false);
  const [total, setTotal] = useState(null);
  const [totalFull, setTotalFull] = useState(propina);
  const [totalFinal, setTotalFinal] = useState(null);

  const [suma, setSuma] = useState(0);


  useEffect(() => {
    const tot = Number(total);
    const propi = Math.round((tot * propina) / 100);

    setTotalFull(propi);
    setTotalFinal(tot + propi);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, propina]);

  const incresePersona = () => {
    setPersonas(prevPersona => prevPersona + 1);
  }

  const decresePersona = () => {
    if (personas === 2) {
      setPersonas(2);
      return;  
    }

    setPersonas(prevPersona => prevPersona - 1);
  }

  const cambioPropinaUno = () => {
    setPropina(0);
    setPropinaUno(true);
    setPropinaDos(false);
    setPropinaTres(false);
    setPropinaCuatro(false);
  }

  const cambioPropinaDos = () => {
    setPropina(10);
    setPropinaUno(false);
    setPropinaDos(true);
    setPropinaTres(false);
    setPropinaCuatro(false);
  }

  const cambioPropinaTres = () => {
    setPropina(15);
    setPropinaUno(false);
    setPropinaDos(false);
    setPropinaTres(true);
    setPropinaCuatro(false);
  }

  const cambioPropinaCuatro = () => {
    setPropina(30);
    setPropinaUno(false);
    setPropinaDos(false);
    setPropinaTres(false);
    setPropinaCuatro(true);
  }

  const valorTeclado = (num) => {
    if (total === null && num === '0') {
      setTotal(null);
      return;
    }

    setTotal(prevTotal => total === null ?  num : prevTotal + num);
  }

  const borrarTeclado = () => {
    if (total !== null) {
      if (total.length > 1) {
        setTotal(prevTotal => prevTotal.slice(0, -1));
      } else if (total.length === 1){
        setTotal(null);
      }
    } else {
      setTotal(null);
    }
  }

  const sumarNum = () => {
    setSuma(total)
  }

  return (
    <>
    <StatusBar backgroundColor="#1e8f87" />
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.areaSegura}>
        <View style={styles.zonaColor}>
          <View style={styles.circulo}></View>
          <View style={styles.firstLine}>
            <Image source={require('./src/assets/dividePay.png')} style={styles.logotipo} />
            <View>
              <Text style={styles.infoDisplayText}>Total</Text>
              <Text style={styles.infoDisplayText4}>$ {totalFinal === null ? '0' : totalFinal}</Text>
            </View>
          </View>
          <View style={styles.infoDisplay}>
            <View>
              <View style={styles.mb}>
                <Text style={styles.infoDisplayText}>Sub Total</Text>
                <Text style={styles.infoDisplayText3}>$ {total === null ? '0' : total}</Text>
              </View>
             
            </View>
           <View style={styles.innerDisplay}>
            <View>
              <Text style={styles.infoDisplayText}>Personas</Text>
              <Text style={styles.infoDisplayText2}>{personas}</Text>
            </View>
            <View style={styles.infoDisplayMargen}>
              <Text style={styles.infoDisplayText}>Propina</Text>
              <Text style={styles.infoDisplayText2}>$ {totalFull.toString()}</Text>
            </View>
           </View>
          </View>
          <View style={styles.propina}>
            <View style={styles.propinaIndi}>
              <TouchableOpacity style={styles.propinaBtn} onPress={() => {cambioPropinaUno()}}>
                <Text style={styles.propinaBtnText}> 0%</Text>
                {propinaUno && (
                  <View style={styles.checkIcon}>
                    <Icon name="check" size={8} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.propinaBtn} onPress={() => {cambioPropinaDos()}}>
                <Text style={styles.propinaBtnText}>10%</Text>
                {propinaDos && (
                  <View style={styles.checkIcon}>
                    <Icon name="check" size={8} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.propinaBtn} onPress={() => {cambioPropinaTres()}}>
                <Text style={styles.propinaBtnText}>15%</Text>
                {propinaTres && (
                  <View style={styles.checkIcon}>
                    <Icon name="check" size={8} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.propinaBtn} onPress={() => {cambioPropinaCuatro()}}>
                <Text style={styles.propinaBtnText}>30%</Text>
                {propinaCuatro && (
                  <View style={styles.checkIcon}>
                    <Icon name="check" size={8} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.personasContainerOuter}>
            <View style={styles.personasContainer}>
              <TouchableOpacity style={styles.flechas} onPress={() => {decresePersona()}}>
                <Icon name="chevron-left" size={12} color="#37dbd0" />
              </TouchableOpacity>
              <View style={styles.numPersonasContainer}>
                <Icon name="user-friends" size={14} color="#37dbd0" />
                <Text style={styles.numPersonasText}>{personas}</Text>
              </View>
              <TouchableOpacity style={styles.flechas} onPress={() => {incresePersona()}}>
                <Icon name="chevron-right" size={12} color="#37dbd0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      <View style={styles.zonaNoColor}>
      
      <View style={styles.teclado}>
          <View style={styles.tecladoLine}>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('1')}}>
              <Text style={styles.tecladoLineBtnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('2')}}>
              <Text style={styles.tecladoLineBtnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('3')}}>
              <Text style={styles.tecladoLineBtnText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tecladoLine}>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('4')}}>
              <Text style={styles.tecladoLineBtnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('5')}}>
              <Text style={styles.tecladoLineBtnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('6')}}>
              <Text style={styles.tecladoLineBtnText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tecladoLine}>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('7')}}>
              <Text style={styles.tecladoLineBtnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('8')}}>
              <Text style={styles.tecladoLineBtnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('9')}}>
              <Text style={styles.tecladoLineBtnText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tecladoLine}>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {sumarNum()}}>
              <Text style={styles.tecladoLineBtnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtn} onPress={() => {valorTeclado('0')}}>
              <Text style={styles.tecladoLineBtnText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tecladoLineBtnIcon} onPress={() => {borrarTeclado()}}>
              <Icon name="backspace" size={14} color="#999" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnDividirContainer}>
          <TouchableOpacity style={styles.btnDividir} onPress={() => {}}>
            <Text style={styles.btnDividirText}>Dividir cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  areaSegura: {
    flex: 1,
    justifyContent: 'space-between',
  },
  zonaColor: {
    backgroundColor: '#64ede4',
    paddingHorizontal: 20,
    position: 'relative',
    flex: 1,
    justifyContent: 'space-around'
  },
  zonaNoColor: {
    paddingHorizontal: 20,
  },
  logotipo: {
    width: SCREEN_SIZE.width / 3.5,
    height: (540 * SCREEN_SIZE.width / 3.5) / 1000
  },
  circulo: {
    width: SCREEN_SIZE.width * 1.5,
    height: SCREEN_SIZE.width * 1.5,
    borderRadius: SCREEN_SIZE.width * 2,
    backgroundColor: '#37dbd0',
    position: 'absolute',
    top: -350,
    left: -50
  },
  infoDisplay: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  innerDisplay: {
    flexDirection: 'row',
  },
  teclado: {
    height: SCREEN_SIZE.height / 3,
    marginTop: 50
  },
  tecladoLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tecladoLineBtn: {
    padding: 15
  },
  tecladoLineBtnIcon: {
    padding: 10
  },
  btnDividirContainer: {
    marginVertical: 20
  },
  btnDividir: {
    backgroundColor: '#37dbd0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 8
  },
  btnDividirText: {
    color: '#fff'
  },
  propina: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 40
  },
  propinaBtn: {
    width: SCREEN_SIZE.width / 9,
    height: SCREEN_SIZE.width / 9,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(34, 34, 34, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  propinaBtnText: {
    fontSize: 10,
    color: '#37dbd0'
  },
  tecladoLineBtnText: {
    fontSize: 18
  },
  personasContainerOuter: {
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: -25,
    left: (SCREEN_SIZE.width / 2) - (SCREEN_SIZE.width / 1.7) / 2 - 20, 
  },
  personasContainer: {
    width: SCREEN_SIZE.width / 1.7,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: '#f9f9f9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  numPersonasContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numPersonasText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#37dbd0'
  },
  infoDisplayText: {
    color: '#fff',
    fontSize: 12,
  },
  infoDisplayText2: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  infoDisplayText3: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  infoDisplayText4: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  infoDisplayMargen: {
    marginLeft: 20
  },
  flechas: {
    padding: 10
  },
  propinaIndi: {
    position: 'relative',
  },
  checkIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#64ede4',
    width: 16,
    height: 16,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mb: {
    marginBottom: 5
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;
