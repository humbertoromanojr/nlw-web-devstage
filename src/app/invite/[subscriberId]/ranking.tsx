import Image from 'next/image'

import { getRanking } from '@/http/api'

import silver from '../../../asset/Medal_silver.svg'
import gold from '../../../assets/MeMedal_gold.svg'
import cooper from '../../../assets/Medal_cooper.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  alt="Medal Gold"
                  src={gold}
                  className="absolute right-6 top-0"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  alt="Medal Silver"
                  src={silver}
                  className="absolute right-6 top-0"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  alt="Medal Cooper"
                  src={cooper}
                  className="absolute right-6 top-0"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
