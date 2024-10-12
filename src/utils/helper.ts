export function truncateString(input: string, maxLength: number = 70): string {
    if (input.length <= maxLength) {
        return input;
    }

    const trimmedString = input.slice(0, maxLength);
    const lastSpaceIndex = trimmedString.lastIndexOf(" ");

    return lastSpaceIndex > -1
        ? trimmedString.slice(0, lastSpaceIndex) + "..."
        : trimmedString + "...";
}
