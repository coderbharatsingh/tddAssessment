import add from './src/calculator';

console.log(`sum of multiple numbers string ${add('3,2,8,11')}`);
console.log(`sum of long amount of multiple numbers string ${add('3,32,12,111,456,232,2,11,67,3,93,54,75,88,43,88,100,11')}`);
console.log(`sum numbers with new line ${add(`2
    11,34
    1`)}`);
console.log(`custom delimiter ${add(`//;
    32;34`)}`);

try {
    add('12,-34,22,-3,12');
} catch(err) {
    console.error(err);
}
