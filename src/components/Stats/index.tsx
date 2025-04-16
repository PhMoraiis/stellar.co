import { ArrowUpRight, MonitorSmartphone, Handshake } from 'lucide-react'

export default function Stats() {
  return (
    <div className="py-16 px-4 md:py-36 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-16">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-orange-300/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <h1 className="text-2xl md:text-4xl font-serif text-[#333] leading-relaxed">
            We make you unforgettable through
            <span className="inline-flex items-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full">
              <ArrowUpRight className="w-5 h-5 text-orange-500 mr-2" /> branding
            </span>
            , generate new
            <br className="hidden md:block" />
            customers with
            <span className="inline-flex items-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full">
              <MonitorSmartphone className="w-5 h-5 text-orange-500 mr-2" />{' '}
              websites
            </span>
            , and scale you through ongoing
            <br className="hidden md:block" />
            <span className="inline-flex items-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full">
              <Handshake className="w-5 h-5 text-orange-500 mr-2" />{' '}
              partnerships
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <StatCard title="Number of projects completed" value="125+" />
          <StatCard title="Satisfaction Rate" value="97%" />
          <StatCard title="Years of Experience" value="7" />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="relative bg-[#e8ded0] rounded-xl p-6 shadow-sm">
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#333] flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="border-l-4 border-orange-500 pl-3">
        <p className="text-sm text-[#666] font-mono">{title}</p>
        <p className="text-5xl font-serif text-[#333] mt-2">{value}</p>
      </div>
    </div>
  )
}
