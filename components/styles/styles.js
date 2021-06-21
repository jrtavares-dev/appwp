import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default styles = {
    Container: {
        backgroundColor: '#f3f4f6'
    },
    Header: {
        backgroundColor: '#7f0000',
        marginTop: 20,
        height: 20,
        marginBottom: 20
    },
    WebView: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: '#f3f4f6'
      },
    BigTitulo: {
        color: '#7f0000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    MiniTitulo: {
        color: '#003791',
        fontSize: 17,
        fontWeight: 'bold'
    },
    Cards: {
        marginBottom: 30,
    }
}
