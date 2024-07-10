import {supabase} from "./SupabaseClient"
import { UserHighscoreNumber } from "../usertypes"

export const GetHighscore = async (): Promise<UserHighscoreNumber[]> => {
    let { data, error } = await supabase
    .rpc('get_highscores', {
      limit_count: 10 ,
    })
    if (error) console.error(error)
    //else console.log(data)
    return data;
}

export const UpdateScore = async (number: string, score: any): Promise<any> => {
    let { data, error } = await supabase.rpc("update_score", {
        user_number: number,
        user_score: score,
    });
    if (error) console.error(error);
    //else console.log(data);
    return data;
}