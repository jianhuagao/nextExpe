import { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';

export default function Index() {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-[#111827] dark:text-white">
        <div>
          <div className="font-extra bold text-center text-4xl sm:text-5xl lg:text-6xl">
            <span className="mx-3">👋</span>
            <span>Hello</span>
            <span className="ml-4 cursor-pointer underline decoration-sky-500" onClick={() => setIsOpen(true)}>
              World
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
            a demo <code className="font-mono font-medium text-sky-500 dark:text-sky-400">test</code> demo
          </p>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 backdrop-blur bg-white/60 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
