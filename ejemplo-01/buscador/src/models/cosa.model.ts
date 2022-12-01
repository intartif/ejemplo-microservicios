import { Schema, model } from 'mongoose';

const cosasSchema = new Schema(
  {
    name: String
  },
  {
    versionKey: false
  });

const CosaModel = model('Cosa', cosasSchema, 'cosastore')

export default CosaModel;
