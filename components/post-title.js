export default function PostTitle({ children }) {
  return (
    <h1 className="mt-6 text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
