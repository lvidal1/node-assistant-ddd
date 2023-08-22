import { Document , model , Schema } from "mongoose"


interface IUser extends Document {
    name: string;
    email: string;
    uuid: string;
    description: string;
}



const UserSchema = new Schema<IUser>({
    uuid: {type: String, required:true},
    name: {type: String, required:true},
    email: {type: String, required: true},
    description: {type: String, required: false}
})

const UserModel = model<IUser>('User',UserSchema);

export default UserModel