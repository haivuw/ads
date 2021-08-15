import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    const statusChance = Math.random()
    return {
        campaignName: namor.generate({ words: 1, numbers: 0 }),
        budget: namor.generate({ words: 1, numbers: 0 }),
        status:
            statusChance > 0.66
                ? '有効'
                : '入札戦略学習中',
        optimisationScore: Math.floor(Math.random() * 30),
        account: namor.generate({ words: 1, numbers: 0 }),
        campaignType:
            statusChance > 0.66
                ? 'ショッピング'
                : 'ローカル',
        conversions: Math.floor(Math.random() * 30),
        costConv: Math.floor(Math.random() * 30),
        impr: Math.floor(Math.random() * 30),
        interactions: Math.floor(Math.random() * 30),
        interactionRate: Math.floor(Math.random() * 30),
        AvgCost: Math.floor(Math.random() * 30),
        click: Math.floor(Math.random() * 30),
        invalidClick: Math.floor(Math.random() * 30),
        avgCPC: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}