interface Idevice{
    maker: string;
    name: string;
    bettery: number;
    colorNo: number;
    created_at: Date;
    features: string[];
}

const iponeX: Idevice = {
    maker: "apple",
    name: "iponeX",
    bettery: 2030,
    colorNo: 304,
    created_at: new Date(2024),
    features: ['slim','camera50000']
};

const gallexy20: Idevice = {
    maker: "samsung",
    name: "gallexy20",
    bettery: 2030,
    colorNo: 255,
    created_at: new Date(2024),
    features: ['slim','camera80000']
};

console.log(iponeX.maker);
console.log(iponeX.features[0]);

console.log(gallexy20.maker);
console.log(gallexy20.features[0]);
