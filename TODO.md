## TODO
 * Continue updating Documentation
    * Progress so far: Completed Game.js
 * Find a way to auto-generate constants
 
 
## Screeps 4.x.x
Screeps got updated on 10/14/2019 to 4.x.x 
(see https://screeps.com/forum/topic/2814/factories-new-resources-npc-strongholds).

The following could cause some problems / need to be updated in the autocomplete

### API Changes
* POSSIBLY BREAKING CHANGE: Implemented new global Store prototype. All structures and creeps now use this prototype as 
their store property. Old style properties are now considered deprecated. See documentation for more details, and also 
this previous discussion.

    If you have any troubles because of this change, it most likely falls into one of these categories:
    
    You're checking for structure.store presence to distinguish storages and containers from spawns and extensions. Use
     structure.structureType check instead, or structure.store.getCapacity(RESOURCE_ENERGY) !== null.
    
    You're comparing .store[resource] === undefined. Now all absent resources are equal to 0.
    
    You're trying to redefine store property, which is now non-configurable.

* A lot of new constants.

* PWR_OPERATE_FACTORY power is now operational.

* RoomObject.effects elements now have effect property instead of power. Property power remains for backward 
compatibility, but is not documented and will be removed in the future.

* Added new method Game.market.getHistory, which contains historical price data for all resources.

* Increased per-player market orders limit from 50 to 300.

* Added expiration period to market orders. An order expires in 30 days after its creation, and the remaining market fee 
is returned. Extending the order doesn't update its expiration time.

* Game.market.createOrder now accepts parameters in an object notation in order to minimize mistakes caused by wrong 
order of parameters:

    ```
    Game.market.createOrder({
      type: ORDER_BUY,
      resourceType: RESOURCE_ENERGY,
      price: 0.01,
      totalAmount: 100000,
      roomName: 'W1N1'
    });
    ```
  
* Removed minimal limit for StructureTerminal.send.
