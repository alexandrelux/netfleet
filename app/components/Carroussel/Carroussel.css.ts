import { carrousseldHeight, carrousselWidht } from "@/app/utils/const";

export const styles = {
    carroussel: `group relative max-w-[${carrousselWidht}px] min-h-[${carrousseldHeight}px] mx-auto flex items-center justify-center mb-10`,
    image: `object-cover transition-all border border-4 border-neutral-900 rounded-xl group-hover:border-white h-[400px] w-[${carrousselWidht}px]`,
    buttonLeft: "absolute w-1/3 h-full top-0 left-0 flex items-center",
    chevronLeft:
        "transition-opacity h-14 top-1/2 text-white opacity-25 mx-14 group-hover:opacity-100",
    buttonRight:
        "absolute w-1/3 h-full top-0 right-0 flex items-center justify-end",
    chevronRight:
        "transition-opacity h-14 top-1/2 text-white opacity-25 mx-14 group-hover:opacity-100",
    details: {
        class: "absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center",
        title: "font-bold text-5xl drop-shadow opacity-80 group-hover:opacity-100 px-5",
    },
};
