import Image from 'next/image'

import cooper from '../../assets/Medal_cooper.svg'
import gold from '../../assets/Medal_gold.svg'
import silver from '../../assets/Medal_silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Humberto Junior
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1777
          </span>
          <Image
            alt="Medal Gold"
            src={gold}
            className="absolute right-6 top-0"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Beltrano da silva
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            977
          </span>
          <Image
            alt="Medal Gold"
            src={silver}
            className="absolute right-6 top-0"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Ciclano moreira
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            777
          </span>
          <Image
            alt="Medal Gold"
            src={cooper}
            className="absolute right-6 top-0"
          />
        </div>
      </div>
    </div>
  )
}
