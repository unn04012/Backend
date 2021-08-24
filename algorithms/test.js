const factorical = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorical(n - 1);
}

const combinations = (total, count) => {
    return factorical(total) / (factorical(total - count) * factorical(count))
}

console.log(combinations(2, 2));