'use strict';

import LocationSchema, { Location } from '../models/Location';

class LocationBo {
  public async getLocation(): Promise<Location[]> {
    const topics: Location[] = await LocationSchema.findAll();

    return topics;
  }

  public async postLocation(data: any): Promise<Location[]> {
    const location: any = await LocationSchema.create(data);

    return location;
  }
}

export const locationBo = new LocationBo();