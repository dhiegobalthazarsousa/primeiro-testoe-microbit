input.onButtonPressed(Button.A, function () {
    if (stage == 0) {
        primeiroValor += 1
        basic.showNumber(primeiroValor)
    }
    if (stage == 1) {
        operador += 1
        if (operador == 0) {
            basic.showString("+")
        }
        if (operador == 1) {
            basic.showString("-")
        }
        if (operador == 2) {
            basic.showString("x")
        }
        if (operador == 3) {
            basic.showString("/")
        }
        if (operador == 4) {
            operador = 0
            basic.showString("+")
        }
    }
    if (stage == 2) {
        segundoValor += 1
        basic.showNumber(segundoValor)
    }
})
input.onButtonPressed(Button.B, function () {
    if (stage == 0) {
        stage = 1
        operador = 0
        basic.showString("+")
    } else {
        if (stage == 1) {
            stage = 2
            basic.showNumber(segundoValor)
        } else {
            if (stage == 2) {
                if (operador == 0) {
                    basic.showNumber(primeiroValor + segundoValor)
                }
                if (operador == 1) {
                    basic.showNumber(primeiroValor - segundoValor)
                }
                if (operador == 2) {
                    basic.showNumber(primeiroValor * segundoValor)
                }
                if (operador == 3) {
                    basic.showNumber(primeiroValor / segundoValor)
                }
            }
        }
    }
})
let operador = 0
let segundoValor = 0
let primeiroValor = 0
let stage = 0
stage = 0
primeiroValor = 0
segundoValor = 0
operador = 0
basic.showNumber(primeiroValor)
