'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './thing.events';

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

registerEvents(ThingSchema);
export default mongoose.model('Thing', ThingSchema);
