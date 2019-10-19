## TODO
 * Continue updating Documentation
    * Progress so far: Completed Game.js
 * Find a way to auto-generate constants
 
 
## Screeps 4.x.x
Screeps got updated on 10/14/2019 to 4.x.x 
(see https://screeps.com/forum/topic/2814/factories-new-resources-npc-strongholds).

The following could cause some problems / need to be updated in the autocomplete

### API Changes

* A lot of new constants.

* RoomObject.effects elements now have effect property instead of power. Property power remains for backward 
compatibility, but is not documented and will be removed in the future.

* Added new method Game.market.getHistory, which contains historical price data for all resources.

* Increased per-player market orders limit from 50 to 300.

* Added expiration period to market orders. An order expires in 30 days after its creation, and the remaining market fee 
is returned. Extending the order doesn't update its expiration time.
  
* Removed minimal limit for StructureTerminal.send.
