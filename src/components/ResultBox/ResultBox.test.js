import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, cleanup} from '@testing-library/react';

const testCases = [
    {from: 'PLN', to: 'USD', amount: 12},
];

const testCases2 = [
    {from: 'USD', to: 'PLN', amount: 3.43},
];

const testCases3 = [
    {from: 'PLN', to: 'PLN', amount: 30}
];

const testCases4 = [
    {from: 'PLN', to: 'PLN', amount: -100}
];

for(const testObj of testCases) {
    describe('Component ResultBox', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount}/>);
        });
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent('PLN 12.00 = $3.43');
        });
    });
    cleanup()
}

for(const testObj of testCases2) {
    describe('Component ResultBox2', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount}/>);
        });
        it('should render proper info about conversion when USD -> PLN', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent('$3.43 = PLN 12.01');
        });
    });
    cleanup()
}

for(const testObj of testCases3) {
    describe('Component ResultBox3', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount}/>);
        });
        it('should render proper info when same currency is selected', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount}/>);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent('PLN 30.00 = PLN 30.00');
        });
    });
    cleanup()
}

for(const testObj of testCases4) {
    describe('Component ResultBox4', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount}/>);
        });
        it('should render "Wrong value" when value is smaller than zero', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={-100}/>);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent('Wrong value');
        });
    });
    cleanup()
}