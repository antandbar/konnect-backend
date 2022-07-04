'use strict';

import LocationSchema, { Location } from '../models/Location';

class LocationBo {
  public async getLocation(): Promise<Location[]> {
    const topics: Location[] = await LocationSchema.findAll();

    return topics;
  }
}

export const locationBo = new LocationBo();