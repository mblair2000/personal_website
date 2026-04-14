export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-surface-200" />
        <div className="absolute inset-0 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
    </div>
  )
}
