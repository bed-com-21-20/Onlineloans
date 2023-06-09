import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { jwtConstants } from "./jwt.constants";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearToken(),
            secreteOrKey: jwtConstants.secret,
        });
    }
async validate(payload: any){
    return { userId: payload.sub, username: payload.username };
}

}