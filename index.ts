import dotenv from "dotenv";
import UserApp from "./source/user/user.app"

dotenv.config();

const app = new UserApp(parseInt(process.env.PORT || "8000"));

app.listen();
