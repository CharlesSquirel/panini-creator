import { breadVariants } from "@/data/bread";

export const findRegisterName = (data: string[]) => {
    const registerNames: { [key: string]: string } = {
        "WHEAT": "base.bread",
        "OLIVE OIL": "base.dressing",
    };

    for (const item of data) {
        if (item in registerNames) {
            return registerNames[item];
        }
    }

    return "";
};

console.log(findRegisterName(breadVariants))