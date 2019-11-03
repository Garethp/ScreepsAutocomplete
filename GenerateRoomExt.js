const constants = require('./Global/ConstantsModule');
for(let c in constants) {
	global[c] = constants[c];
}

const singleList = [
    STRUCTURE_OBSERVER, STRUCTURE_POWER_SPAWN, STRUCTURE_EXTRACTOR, STRUCTURE_NUKER,
    STRUCTURE_FACTORY, STRUCTURE_INVADER_CORE, STRUCTURE_POWER_BANK,
    //STRUCTURE_TERMINAL,   STRUCTURE_CONTROLLER,   STRUCTURE_STORAGE,
];

const multipleList = [
    STRUCTURE_SPAWN, STRUCTURE_EXTENSION, STRUCTURE_ROAD, STRUCTURE_WALL,
    STRUCTURE_RAMPART, STRUCTURE_KEEPER_LAIR, STRUCTURE_PORTAL, STRUCTURE_LINK,
    STRUCTURE_TOWER, STRUCTURE_LAB, STRUCTURE_CONTAINER,
];

const singleNonStructureList = [
    LOOK_MINERALS,
];

const multipleNonStructureList = [
    LOOK_SOURCES, LOOK_DEPOSITS, LOOK_NUKES, LOOK_CONSTRUCTION_SITES, LOOK_TOMBSTONES,
    LOOK_RUINS, LOOK_RESOURCES
];

console.log('Room.prototype = {');

for (let type of singleList) {
	const typeCap = type.charAt(0).toUpperCase() + type.slice(1);
	console.log(`  /**`);
	console.log(`   * The ${typeCap} structure of this room, if present, otherwise undefined.`)
	console.log(`   *`);
	console.log(`   * @see {@link https://docs.screeps.com/api/#Structure${typeCap}}`);
	console.log(`   *`);
	console.log(`   * @type {undefined|Structure${typeCap}}`);
	console.log(`   */`);
	console.log(`   ${type}: undefined,`);
	console.log();
}

for (let type of singleNonStructureList) {
	const typeCap = type.charAt(0).toUpperCase() + type.slice(1);
	console.log(`  /**`);
	console.log(`   * The ${typeCap} of this room, if present, otherwise undefined.`)
	console.log(`   *`);
	console.log(`   * @see {@link https://docs.screeps.com/api/#${typeCap}}`);
	console.log(`   *`);
	console.log(`   * @type {undefined|${typeCap}}`);
	console.log(`   */`);
	console.log(`   ${type}: undefined,`);
	console.log();
}

for (let type of multipleList) {
	const typeCap = type.charAt(0).toUpperCase() + type.slice(1);
	console.log(`  /**`);
	console.log(`   * All ${typeCap} structures of this room, if present, otherwise an empty array.`)
	console.log(`   *`);
	console.log(`   * @see {@link https://docs.screeps.com/api/#Structure${typeCap}}`);
	console.log(`   *`);
	console.log(`   * @type {Array<Structure${typeCap}>}`);
	console.log(`   */`);
	console.log(`   ${type}s: [],`);
	console.log();
}

for (let type of multipleNonStructureList) {
	const typeCap = type.charAt(0).toUpperCase() + type.slice(1);
	console.log(`  /**`);
	console.log(`   * All ${typeCap} of this room, if present, otherwise an empty array.`)
	console.log(`   *`);
	console.log(`   * @see {@link https://docs.screeps.com/api/#${typeCap}}`);
	console.log(`   *`);
	console.log(`   * @type {Array<${typeCap}>}`);
	console.log(`   */`);
	console.log(`   ${type}s: [],`);
	console.log();
}

console.log('}');