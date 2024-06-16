import React from 'react'

const Text = () => {
  return (
    <div>
   <div class="relative flex min-h-screen flex-col justify-center gap-44 overflow-hidden bg-gray-500 py-60 sm:py-12">
  <img src="/img/beams.jpg" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 gap-44 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="px-90 relative gap-x-40 bg-rose-100 pb-60 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mr-70 mx-auto inline-grid h-12 max-w-lg scroll-px-40">
      <h1 class="font-size:0.75rem text-left font-bold">Introduction to UX Design</h1>
    </div>
    <div class="flex h-24 gap-[2.75rem] text-left">
      <div class="px-10 text-left">
        <button>Module Content</button>
      </div>
      <div class="text-flex gap-[2.75rem] px-10">
        <button>Settings</button>
      </div>
    </div>
    <hr class="grid touch-pinch-zoom gap-[2.75rem]" />
    <div class="grid h-16 border-spacing-1.5">
      <div class="grid h-12"><textarea class="h-12 w-96 rounded-b-lg bg-white">Title</textarea></div>
      <div class="mx-auto mr-60 inline-grid max-w-md scroll-px-40">
        <textarea class="h-24 w-96 gap-44 rounded-b-lg">Add Text</textarea>
      </div>
      <div class="flex gap-2">
        <p>Add</p>
        <button class="border-radius justify-start bg-pink-300 font-sans">Aa text</button>
        <button class="border-radius justify-start bg-pink-300 font-sans">image</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Text
