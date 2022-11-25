import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    personContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        alignItems: 'center',
    },
    image: {
        borderRadius: 20,
    },
});

export default styles;