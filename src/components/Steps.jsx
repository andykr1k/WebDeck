export default function Steps() {
    return (
        <div className="p-5 md:pl-10 md:pr-10 text-lblue">
            <h2 class="sr-only">Steps</h2>

            <div
                class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
            >
                <ol
                class="relative z-10 flex justify-between text-sm font-medium text-lblue"
                >
                <li class="flex items-center bg-white p-2">
                    <span
                    class="h-6 w-6 rounded-full bg-raisin text-center text-[10px] font-bold leading-6"
                    >
                    1
                    </span>
                    <span class="hidden sm:ml-2 sm:block"> Basic Information </span>
                </li>

                <li class="flex items-center bg-white p-2">
                    <span
                    class="h-6 w-6 rounded-full bg-raisin/25 text-center text-[10px] font-bold leading-6 text-white"
                    >
                    2
                    </span>

                    <span class="hidden sm:ml-2 sm:block"> Education </span>
                </li>

                <li class="flex items-center bg-white p-2">
                    <span
                    class="h-6 w-6 rounded-full bg-raisin/25 text-center text-[10px] font-bold leading-6"
                    >
                    3
                    </span>

                    <span class="hidden sm:ml-2 sm:block"> Work Experience </span>
                </li>

                <li class="flex items-center bg-white p-2">
                    <span
                    class="h-6 w-6 rounded-full bg-raisin/25 text-center text-[10px] font-bold leading-6"
                    >
                    4
                    </span>

                    <span class="hidden sm:ml-2 sm:block"> Socials </span>
                </li>
                </ol>
            </div>
        </div>
    )
}