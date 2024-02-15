import React from 'react'

export default function Contact() {
  return (
    <main>
      <div className="p-5">
        <h2 className="text-primary-100 mb-4 text-center font-semibold text-lg">اتصل بنا</h2>
        <span>
          <input className="w-full rounded-lg text-primary-100 border-gray-300 active:border-primary-100/50 mb-5" type="text" name="" id="" placeholder="الأسم" />
        </span>
        <div className="flex flex-row justify-between">
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-primary-100 ring-1 ring-inset ring-gray-500/10">Badge</span>
          <span class="inline-flex items-center rounded-md bg-primary-100 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-red-600/10">Badge</span>
          <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge</span>
          <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
          <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Badge</span>
          <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Badge</span>
          <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Badge</span>
          <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Badge</span>
        </div>
      </div>
    </main>
  )
}
