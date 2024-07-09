import { DataApi, Flex, View } from "@lenra/app";
import { Counter } from "../../classes/Counter.js";

export default function (_data, _props) {
    return Flex([
        View("lenra.counter")
            .find(Counter, {
                user: "global"
            })
            .props({ text: "The common counter" }),
    ])
        .direction("vertical")
        .spacing(16)
        .mainAxisAlignment("spaceEvenly")
        .crossAxisAlignment("center")
}

