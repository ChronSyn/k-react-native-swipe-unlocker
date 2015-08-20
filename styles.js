/**
 * @file 手动解锁的格状视图样式
 * @return {React.StyleSheet} 首页样式
 */

var React = require('react-native');
var {
     StyleSheet
} = React;

var Dimensions = React.NativeModules.UIManager.Dimensions;
var screenWidth = Dimensions.window.width;
var colWidth = screenWidth / 3;

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D3E48',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    header: {
        flex: 1,
        marginTop: 80,
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 15
    },
    normalTitle: {
        color: '#FFFFFF'
    },
    okTitle: {
        color: 'green'
    },
    errorTitle: {
        color: 'red'
    },
    gridView: {
        margin: 40,
        marginBottom: 60
    },
    gridLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: colWidth - 25,
    },
    gridItem: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#60AAFC'
    },
    defaultGridItem: {
    },
    crossedGridItem: {
        borderColor: '#71BBFD',
        backgroundColor: '#4E4D59'
    },
    startGridItem: {
        borderColor: '#82CCFE',
        backgroundColor: '#5F5E6A'
    },
    line: {
        backgroundColor: 'green',
        height: 300,
        width: 10,
        position: 'absolute',
        top: 30,
        left: 30
    },
    icon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 14
    }
});

module.exports = styles;
