export function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getPerkLocalStorageKey(perkName) {
    return `DBD-RANDOMIZER-${perkName}`;
}

export function getPerkKey(source, perk) {
    return `${source}-${perk.target}-${perk.name}-${perk.imageName}`;
}