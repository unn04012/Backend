let weights = [50, 82, 75, 120];
let head2head = ["NLWL", "WNLL", "LWNW", "WWLN"];
weights = [60, 60, 60];
head2head = ["NWL", "LNW", "WLN"]
solution(weights, head2head)
function solution(weights, head2head) {
    var answer = [];
    let records = [];
    head2head.forEach((record, index) => {
        let winCount = 0;
        let playCount = 0;
        let moreWeight = 0;
        for (let i = 0; i < record.length; i++) {
            if (i === index) continue;
            switch (record[i]) {
                case 'N':
                    break;
                case 'L':
                    playCount++;
                    break;
                case 'W':
                    if (weights[index] < weights[i]) moreWeight++;
                    winCount++;
                    playCount++;
                    break;
            }
        }
        let winRate = playCount ? (winCount / playCount) : 0
        records.push({
            num: index + 1,
            winRate,
            moreWeight,
            weight: weights[index],
        });
    })

    records.sort((a, b) => {
        if (b.winRate === a.winRate) {
            if (b.moreWeight === a.moreWeight) {
                if (a.weight === b.weight) return a.num - b.num;
                return b.weight - a.weight;
            }
            return b.moreWeight - a.moreWeight
        }
        return b.winRate - a.winRate
    })
    console.log(records)
    return records.map(e => e.num);
}