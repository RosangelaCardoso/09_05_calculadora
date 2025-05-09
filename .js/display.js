class Display {
    constructor() {
        this.displayElement = document.getElementById("display");
        this.historyElement = document.getElementById("history-display");
        this.currentvalue = "0";  // deve ser string, já que usamos métodos como includes e slice
        this.history = "";
    }

    updateDisplay(value = this.currentvalue) {
        this.currentvalue = value;
        this.displayElement.textContent = value;
    }

    updateHistory(value = this.history) {
        this.history = value;
        this.historyElement.textContent = value;
    }

    clear() {
        this.updateDisplay("0");
        this.updateHistory("");
    }

    appendDigit(digit) {
        if (this.currentvalue === "0" && digit !== ".") {
            this.updateDisplay(digit);
        } else if (digit === "." && this.currentvalue.includes(".")) {
            return;
        } else {
            this.updateDisplay(this.currentvalue + digit);
        }
    }

    removelastDigit() {
        if (this.currentvalue.length === 1) {
            this.updateDisplay("0");
        } else {
            this.updateDisplay(this.currentvalue.slice(0, -1));
        }
    }
}
