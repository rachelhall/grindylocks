import "./types/index";
import "./types/Park";
import "./types/Post";
import "./types/User";
import "./types/account";

import { builder } from "./builder";

export const schema = builder.toSchema();
