import { cardHeight, cardWidht } from "@/app/utils/const";

export const styles = {
    class: `relative  w-[${cardWidht}px] h-[${cardHeight}px] shrink-0 grow-0 flex items-center justify-center object-cover 
    border border-2 border-transparent hover:border-white rounded-xl transition-all`,
    image: `object-cover rounded-lg bg-neutral-800`,
    details: {
        class: "absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",
        title: "font-bold",
    },
};
