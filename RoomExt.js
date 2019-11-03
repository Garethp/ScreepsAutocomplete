Room.prototype = {
  /**
   * The Observer structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructureObserver}
   *
   * @type {undefined|StructureObserver}
   */
   observer: undefined,

  /**
   * The PowerSpawn structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn}
   *
   * @type {undefined|StructurePowerSpawn}
   */
   powerSpawn: undefined,

  /**
   * The Extractor structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructureExtractor}
   *
   * @type {undefined|StructureExtractor}
   */
   extractor: undefined,

  /**
   * The Nuker structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructureNuker}
   *
   * @type {undefined|StructureNuker}
   */
   nuker: undefined,

  /**
   * The Factory structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructureFactory}
   *
   * @type {undefined|StructureFactory}
   */
   factory: undefined,

  /**
   * The InvaderCore structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructureInvaderCore}
   *
   * @type {undefined|StructureInvaderCore}
   */
   invaderCore: undefined,

  /**
   * The PowerBank structure of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#StructurePowerBank}
   *
   * @type {undefined|StructurePowerBank}
   */
   powerBank: undefined,

  /**
   * The Mineral of this room, if present, otherwise undefined.
   *
   * @see {@link https://docs.screeps.com/api/#Mineral}
   *
   * @type {undefined|Mineral}
   */
   mineral: undefined,

  /**
   * All Spawn structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureSpawn}
   *
   * @type {Array<StructureSpawn>}
   */
   spawns: [],

  /**
   * All Extension structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureExtension}
   *
   * @type {Array<StructureExtension>}
   */
   extensions: [],

  /**
   * All Road structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureRoad}
   *
   * @type {Array<StructureRoad>}
   */
   roads: [],

  /**
   * All ConstructedWall structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureConstructedWall}
   *
   * @type {Array<StructureConstructedWall>}
   */
   constructedWalls: [],

  /**
   * All Rampart structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureRampart}
   *
   * @type {Array<StructureRampart>}
   */
   ramparts: [],

  /**
   * All KeeperLair structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureKeeperLair}
   *
   * @type {Array<StructureKeeperLair>}
   */
   keeperLairs: [],

  /**
   * All Portal structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructurePortal}
   *
   * @type {Array<StructurePortal>}
   */
   portals: [],

  /**
   * All Link structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureLink}
   *
   * @type {Array<StructureLink>}
   */
   links: [],

  /**
   * All Tower structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureTower}
   *
   * @type {Array<StructureTower>}
   */
   towers: [],

  /**
   * All Lab structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureLab}
   *
   * @type {Array<StructureLab>}
   */
   labs: [],

  /**
   * All Container structures of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#StructureContainer}
   *
   * @type {Array<StructureContainer>}
   */
   containers: [],

  /**
   * All Source of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Source}
   *
   * @type {Array<Source>}
   */
   sources: [],

  /**
   * All Deposit of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Deposit}
   *
   * @type {Array<Deposit>}
   */
   deposits: [],

  /**
   * All Nuke of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Nuke}
   *
   * @type {Array<Nuke>}
   */
   nukes: [],

  /**
   * All ConstructionSite of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#ConstructionSite}
   *
   * @type {Array<ConstructionSite>}
   */
   constructionSites: [],

  /**
   * All Tombstone of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Tombstone}
   *
   * @type {Array<Tombstone>}
   */
   tombstones: [],

  /**
   * All Ruin of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Ruin}
   *
   * @type {Array<Ruin>}
   */
   ruins: [],

  /**
   * All Resource of this room, if present, otherwise an empty array.
   *
   * @see {@link https://docs.screeps.com/api/#Resource}
   *
   * @type {Array<Resource>}
   */
   resources: [],

}
