class Calculator {
        constructor(displayElement) { 
            this.displayElement = displayElement
            this.displayContent = ''
    }

    appendNumber(number) {
        this.displayContent += number
    }

    appendOperator(operator) {
        this.displayContent += operator
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() { //AC버튼을 누르면 공백으로 초기화
        this.displayContent = ''
        this.displayElement.value = " "
    }
    compute() { //eval() 함수로 계산 기능 구현 
        this.displayContent = eval(this.displayContent)        
    }
    compute() { //X를 *로,  ÷을 /로 변경
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )
    }
}
    const buttons = document.querySelectorAll('button')
    const displayElement = document.querySelector('.calclick')
    const calculator = new Calculator(displayElement)

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            switch (button.dataset.type) {
                case 'operator':
                    calculator.appendOperator(button.innerText)
                    calculator.updateDisplay()
                    break
                case 'ac':
                    calculator.clear()             
                    break
                case 'equals':
                    calculator.compute()
                    calculator.updateDisplay()
                    break
                case 'etc':
                    calculator.appendNumber(button.innerText)
                    calculator.updateDisplay()
                    break
            }
        })      
    })