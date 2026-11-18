import { calculatePercentage } from './calculate-percentage';


describe('calculatePercentage', () => {
    it.for([
        { percentage: 20, baseValue: 150, expected: 30 },
        { percentage: 0, baseValue: 150, expected: 0 },
        { percentage: 20, baseValue: 0, expected: 0 },
        { percentage: 150, baseValue: 200, expected: 300 },
        { percentage: -20, baseValue: 150, expected: -30 },
        { percentage: 12.5, baseValue: 200, expected: 25 },
    ])(
        'calculates $percentage% of $baseValue as $expected',
        ({ percentage, baseValue, expected }) => {
            const result = calculatePercentage({
                percentage,
                baseValue,
            });

            expect(result).toBe(expected);
        }
    );
});
