import { UserDocument } from '../models/User';

export interface Context {
    user: UserDocument | null;
}