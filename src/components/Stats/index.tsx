'use client'

import { ArrowLeftRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { BiCodeBlock } from 'react-icons/bi'

export default function Stats() {
  return (
    <div
      id="solutions"
      className="py-16 px-4 md:py-40 flex flex-col items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-movatif-regular text-[#333] space-y-3">
            Fazemos de você inesquecível por meio do
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="size-6 lg:size-8 text-primaryds mr-2" />
              design
            </motion.span>
            , atraímos novos clientes com
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BiCodeBlock className="size-6 lg:size-8 text-primaryds mr-2" />{' '}
              websites
            </motion.span>
            estratégicos e impulsionamos seu crescimento através de contínuas
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ArrowLeftRight className="size-6 lg:size-8 text-primaryds mr-2" />{' '}
              parcerias
            </motion.span>
          </h1>
        </motion.div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <StatCard title="Projetos finalizados" value="99+" />
          <StatCard title="Taxa de Satisfação" value="100%" />
          <StatCard title="Anos de Experiência" value="2" />
        </div> */}
      </div>
    </div>
  )
}

// function StatCard({ title, value }: { title: string; value: string }) {
//   const [isHovering, setIsHovering] = useState(false)

//   return (
//     <motion.div
//       className="relative bg-[#e8ded0] rounded-2xl p-5 shadow-sm flex items-start overflow-hidden transition-all duration-200 ease-in-out"
//       style={{
//         backgroundColor: '#e8ded0',
//       }}
//       whileHover={{
//         backgroundColor: '#f0e6d8',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//       }}
//       onHoverStart={() => setIsHovering(true)}
//       onHoverEnd={() => setIsHovering(false)}
//       transition={{ duration: 0.3 }}
//     >
//       <motion.div
//         className="absolute left-0.5 flex items-center justify-center w-0.5 bg-primaryds h-18"
//         style={{
//           backgroundColor: '#ff4500',
//           boxShadow: '0 0 6px 1px rgba(255, 69, 0, 0.6)',
//         }}
//         animate={
//           isHovering
//             ? {
//                 backgroundColor: '#ff6b3d',
//                 boxShadow: '0 0 10px 2px rgba(255, 107, 61, 0.8)',
//               }
//             : {
//                 backgroundColor: '#ff4500',
//                 boxShadow: '0 0 6px 1px rgba(255, 69, 0, 0.6)',
//               }
//         }
//         transition={{ duration: 0.5 }}
//       />
//       <motion.div
//         className="absolute top-4 right-4 w-7 h-7 rounded-full border-2 flex items-center justify-center"
//         style={{
//           borderColor: '#555',
//         }}
//         animate={
//           isHovering
//             ? {
//                 borderColor: '#333',
//                 scale: 1.1,
//               }
//             : {
//                 borderColor: '#555',
//                 scale: 1,
//               }
//         }
//         transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//       >
//         <motion.div
//           className="size-2.5 rounded-full"
//           style={{
//             backgroundColor: '#ffffff',
//           }}
//           animate={
//             isHovering
//               ? {
//                   scale: [1, 1.2, 1],
//                   rotate: 360,
//                   backgroundColor: ['#ffffff', '#ff9d80', '#ffffff'],
//                 }
//               : {
//                   backgroundColor: '#ffffff',
//                 }
//           }
//           transition={{
//             duration: 1.5,
//             repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
//             repeatType: 'loop',
//           }}
//         />
//       </motion.div>
//       <motion.div className="flex flex-col pl-5 items-start">
//         <motion.p
//           style={{ color: '#777' }}
//           animate={isHovering ? { color: '#555' } : { color: '#777' }}
//           transition={{ duration: 0.3 }}
//           className="text-sm text-zinc-300 font-movatif-regular"
//         >
//           {title}
//         </motion.p>
//         <motion.p
//           style={{ color: '#333' }}
//           animate={isHovering ? { color: '#000' } : { color: '#333', y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="text-5xl text-[#333] font-gorga mt-1"
//         >
//           {value}
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   )
// }
