import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'

import { InputField, InputIcon, InputRoot } from '@/components/input'

import { ButtonIcon } from '@/components/button-icon'

import cooper from '../../assets/Medal_cooper.svg'
import gold from '../../assets/Medal_gold.svg'
import silver from '../../assets/Medal_silver.svg'
import logo from '../../assets/logo.svg'

export default function Invite() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image alt="DevStage" src={logo} width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-nome">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="">Indique e ganhe</h2>
            <p>
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>

            <InputField
              readOnly
              defaultValue="https://localhost:300/invite/3452345345324534534534"
            />

            <ButtonIcon className="-mr-2">
              <Copy className="size-5" />
            </ButtonIcon>
          </InputRoot>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                2323
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Acesso ao link
              </span>

              <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                98
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Inscrições feitas
              </span>

              <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                5º
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Posição no ranking
              </span>

              <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>

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
    </div>
  )
}
