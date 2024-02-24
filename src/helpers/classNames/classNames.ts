type Mods = Record<string, boolean | string>

export function classNames(classes: string, mods: Mods, additional: string[]): string {
    return [
        classes,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value)) // фильтруем массив и оставляем только те значения, котрые true
            .map(([className, value]) => className), // возвращаем ключи
        ...additional
    ].join(' ');
}

