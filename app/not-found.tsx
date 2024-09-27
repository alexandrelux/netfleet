import Link from "next/link";

export default async function NotFound() {
    return (
        <>
            <div className="mt-36 flex flex-col justify-center items-center gap-5">
                <h2 className="text-2xl md:text-4xl font-bold">
                    {"Page non trouvée"}
                </h2>
                <Link
                    className="underline"
                    href={{
                        pathname: `/`,
                    }}
                >
                    {"Retourner à l'accueil"}
                </Link>
            </div>
        </>
    );
}
