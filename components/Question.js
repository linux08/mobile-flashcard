import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import { connect } from 'react-redux'



class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { cardData } = this.props
        console.log(this.props)
        return (
            <View  style={[styles.card, { backgroundColor: 'blue' }]} >
                <Text style={styles.text}>{cardData.question} </Text>
                <TouchableOpacity style={styles.button} onPress={() => alert(`${cardData.answer}`)} >
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>Answer </Text>
                </TouchableOpacity>
            </View>

        )
    }
}


// const { cardData } = this.props
// // console.log('index he')
// console.log(this.props)
// let card = this.props.questions
// //console.log(card)
// // console.log(card)
// let cardComponent = card.map((p, index) => {
//     //console.log(p)
//     //console.log('index at' ,index)
//     // console.log(index)
//     return (<View key={index} style={[styles.card, { backgroundColor: 'blue' }]} >
//         <Text style={styles.text}>{p.question} </Text>
//         <TouchableOpacity style={styles.button} onPress={() => alert(`${p.answer}`)} >
//             <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>Answer </Text>
//         </TouchableOpacity>
//     </View>)
// })



// <View >
//     {cardComponent}
// </View>

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { correct, wrong, name } = this.props
        let total = correct + wrong
        // console.log(correct, wrong, total, name)

        return (
            <View style={styles.noMoreCardsText} >

                <Text style={{ marginTop: 40, fontSize: 40, }} >Quiz result</Text>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={[styles.text, { margin: 30 }]}>Correct {correct}</Text>
                    <Text style={[styles.text, { margin: 30 }]}>Wrong {wrong}</Text>
                </View>


                <View style={styles.box}>
                    <Text style={styles.score}>{Math.round((correct / total) * 100)}%</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() => console.log('jfj')}>
                        <Text style={styles.text}> Restart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() => console.log('jfj')}>
                        <Text style={styles.text}>  Deck </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

{/* this.props.navigation.navigate('Question', { name: name }, {params: { param: name }})} */ }
{/* //onPress={() => this.props.navigation.navigate('Deck', { name: name, length: total })} */ }
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            correct: 0,
            wrong: 0,
            name: ''
        };
    }

    componentDidMount() {
        let data = this.props.deck
        let name = this.props.navigation.state.params.name

        var exactdata = Object.keys(data).reduce((pre, item) => {
            return data[name]
        }, [])
        this.setState({ card: exactdata, name })
    }

    handleYup = (card) => {
        this.setState(prevState => {
            return { correct: prevState.correct + 1 }
        })
        console.log(`Yup for ${card.answer}`)
    }
    handleNope = (card) => {
        this.setState(prevState => {
            return { wrong: prevState.wrong + 1 }
        })
        console.log(`Nope for ${card.answer}`)
    }
    handleMaybe = (card) => {
        console.log(`Maybe for ${card.answer}`)
    }
    render() {


        return (
            <SwipeCards
                stack={true}
                cards={this.state.card.questions}
                renderCard={(cardData) => <Card cardData={cardData} />}
                renderNoMoreCards={() => <NoMoreCards {...this.state} />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    card: {
        marginTop: 200,
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 300,
        height: 200,
        elevation: 1,
    },

    noMoreCardsText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        paddingTop: 10,
        backgroundColor: 'pink',
        paddingLeft: 30,
        paddingRight: 30,
        height: 40,
        borderRadius: 5,
        margin: 50
    },
    resultbutton: {
        backgroundColor: '#FF00FF',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30

    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FF00'
    },
    score: {
        fontSize: 50,
    }
})

function mapStateToProps(state) {

    return {
        deck: state
    }
}


export default connect(mapStateToProps)(Question)



{/* stack={true} */ }


{/* /* <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      /> */ }