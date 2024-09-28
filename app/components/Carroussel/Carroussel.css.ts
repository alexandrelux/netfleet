export const styles = {
    carroussel: `group relative mx-auto flex items-center justify-center max-w-[1440px]`,
    image: `object-cover transition-all rounded-xl bg-black`,
    overlay: `absolute w-full max-w-[960px] h-full rounded-xl overlay`,
    buttonLeft: "absolute w-1/4 h-full top-0 left-0 flex items-center",
    chevronLeft:
        "transition-opacity h-8 md:h-10 top-1/2 text-white opacity-25 mx-4 md:mx-14 group-hover:opacity-100",
    buttonRight:
        "absolute w-1/4 h-full top-0 right-0 flex items-center justify-end",
    chevronRight:
        "transition-opacity h-8 md:h-10 top-1/2 text-white opacity-25 mx-4 md:mx-14 group-hover:opacity-100",
    details: {
        class: "absolute rounded-lg top-0 left-0 w-full h-full flex items-center justify-center",
        title: "font-bold text-2xl sm:text-4xl md:text-2xl lg:text-4xl drop-shadow opacity-80 group-hover:opacity-100 px-10 truncate",
    },
};
