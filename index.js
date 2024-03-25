const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const assembledBatteries = [];
const totalBatteries = assembledBatteries.reduce((total, current) => total + current, 31);