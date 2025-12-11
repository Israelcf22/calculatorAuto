class CalculatorScreen {
    // Selectores
    get sevenButton() { return $('~num7Button'); }
    get eightButton() { return $('~num8Button'); }
    get plusButton() { return $('~plusButton'); }
    get equalsButton() { return $('~equalButton'); }
    get results() { return $('~CalculatorResults'); }

    private getDigitButton(digit: string) {
        return $(`~num${digit}Button`);
    }

    private async enterNumber(numberToEnter: number) {
        const digits = numberToEnter.toString().split('');
        for (const digit of digits) {
            await (await this.getDigitButton(digit)).click();
        }
    }

    // Acciones
    async add(numA: number, numB: number) {
        await this.enterNumber(numA);
        await (await this.plusButton).click();
        await this.enterNumber(numB);
        await (await this.equalsButton).click();
    }

    async getResultText() {
        return this.results.getText();
    }
}

export default new CalculatorScreen();