import CalculatorScreen from './calculator.screen';

describe('Windows Calculator Tests', () => {
    it('should add two numbers and verify the result', async () => {
        // Usamos el Page Object para realizar la acción de suma
        await CalculatorScreen.add(7, 8);

        // Verificamos el resultado
        await expect(CalculatorScreen.results).toHaveText(expect.stringContaining('15'));
    });
});
