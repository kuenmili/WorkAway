import Link from 'next/link'

export default function About () {
  return (
    <div className="hidden mr-3 space-x-4 lg:flex nav__item">
    <Link href="/home" className="px-10 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
        Back
    </Link>
    </div>
  )
}    