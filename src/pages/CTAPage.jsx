
export default function CTAPage() {

  return (
    <div className='grid place-items-center h-screen w-screen bg-raisin'>
    <section class="text-white">
      <div
        class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-lblue text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Feel Connected to your Portfolio.

            <span class="block text-2xl pt-1"> Build your own Website. </span>
          </h1>

          <p class="mx-auto mt-2 max-w-xl sm:text-xl sm:leading-relaxed text-lblue">
            Create multiple designs of your own custom portfolio website in less than 10 minutes!
          </p>

          <div class="mt-4 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-lblue hover:bg-transparent hover:text-lblue focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>
{/*  <a
              class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-lblue hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>*/}
           
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

