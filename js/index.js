/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert

} from 'react-native';

export default class practice1 extends Component {
    constructor(props) {
        super(props)
        this.state = {texts: []};
        this.onButtonPress = this.onButtonPress.bind(this);
        this.renderTexts = this.renderTexts.bind(this);
        this.getItems = this.getItems.bind(this);

    }

    renderTexts(texts) {
        if (texts && texts.length > 0) {
            return (
                //两种写法，第一种隐形传参，第二种代码更易读
                //<View style={{flexWrap: 'wrap'}}>
                // {texts.map(this.getItems)}
                //</View>
                <View style={{flex: 1}}>
                    {texts.map((elem, index) => {
                        console.log(elem,index);
                        return this.getItems(elem);
                    })}
                </View>
            );

        } else {
            return (
                <View></View>
            );
        }
    }

    getItems(item) {
        console.info(item);
        return (<Text style={styles.myText}>{item}</Text>)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='请输入...'
                    style={styles.inputText}
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    style={styles.button}
                    onPress={() => this.onButtonPress(this.state.text)}
                    title='提交'
                />
                {this.renderTexts(this.state.texts)}

                <TouchableOpacity onPress={() => this.onButtonPress(this.state.text)}>
                    <Image
                        style={styles.image}
                        source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    _onPressButton() {

    }

    // Button点击事件：点击提交之后创建一个Text并显示TextInput中输入的内容
    onButtonPress(text) {
        var texts = this.state.texts.concat(text)
        this.setState({texts: texts});
        console.log(this.state.texts);
        Alert.alert(text);
    }

}


//各种控件的样式,需要引入StyleSheet组件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    myText: {
        height: 20,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    inputText: {
        height: 40,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    button: {
        height: 40,
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        margin: 10,
    },
    listView: {
        height: 50,
        width: 100,
        margin: 10,
    },
    image: {
        height: 40,
        width: 60,
        margin: 10,
    }
});
