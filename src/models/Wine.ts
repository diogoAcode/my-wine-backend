import mongoose, { Schema, Document } from 'mongoose';

export interface IWine extends Document {
  name: string;
  safra: number;  
}

const WineSchema: Schema = new Schema({
  name: { type: String, required: true },
  safra: { type: Number, required: true },  
});

export default mongoose.model<IWine>('Wine', WineSchema);
