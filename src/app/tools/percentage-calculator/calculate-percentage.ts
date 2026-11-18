export interface PercentageInput {
    percentage: number;
    baseValue: number;
}

export function calculatePercentage({
    percentage,
    baseValue,
}: PercentageInput): number {
    return percentage * (baseValue / 100);
}