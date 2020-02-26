import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')){//impede que 2 pontos sejam adicionados
            return
        }

        //Lógica para o número der digitado no display 
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay//verifica de clearDisplay é verdadeiro
        let currentValue = clearDisplay ? '' : this.state.displayValue//se for verdadeiro o conteúdo do display é apagado, senão o valor é mantido na tela
        const displayValue = currentValue = currentValue + n//concatena o valor atual com o ultimo numero digitado
        this.setState({ displayValue, clearDisplay: false })//seta o valor do estado para mudar o valor no display

        if(n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }


    render() {
        
        return (
            //className é a mesma coisa que class em HTML e CSS
            <div className="calculator">
                    <Display value = {this.state.displayValue} />
                    <Button label = "AC" click = {this.clearMemory} triple/>
                    <Button label = "/" click = {this.setOperation} operation/>
                    <Button label = "7" click = {this.addDigit}/>
                    <Button label = "8" click = {this.addDigit}/>
                    <Button label = "9" click = {this.addDigit}/>
                    <Button label = "*" click = {this.setOperation} operation/>
                    <Button label = "4" click = {this.addDigit}/>
                    <Button label = "5" click = {this.addDigit}/>
                    <Button label = "6" click = {this.addDigit}/>
                    <Button label = "-" click = {this.setOperation} operation/>
                    <Button label = "1" click = {this.addDigit}/>
                    <Button label = "2" click = {this.addDigit}/>
                    <Button label = "3" click = {this.addDigit}/>
                    <Button label = "+" click = {this.setOperation} operation/>
                    <Button label = "0" click = {this.addDigit} double/>
                    <Button label = "." click = {this.addDigit}/>
                    <Button label = "=" click = {this.setOperation} operation/>
            </div>
        )
    }
}