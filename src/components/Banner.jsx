export default function Banner() {
    return (
        <div class="fixed inset-x-0 top-0 px-4 pt-3">
            <div class="relative rounded-lg bg-lblue px-4 py-3 pr-14 text-white">
                <p class="text-left text-sm font-medium sm:text-center">
                Love WebDeck?&nbsp; 

                <a class="underline" href="/alpinejs">Give us some feedback!&rarr; </a>
                </p>

                <button
                aria-label="Close"
                class="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    />
                </svg>
                </button>
            </div>
        </div>
    )
}