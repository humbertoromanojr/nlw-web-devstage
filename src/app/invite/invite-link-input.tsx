'use client'

import { Copy, Link } from 'lucide-react'

import { ButtonIcon } from '@/components/button-icon'
import { InputField, InputIcon, InputRoot } from '@/components/input'

interface InviteLinkProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)

    console.log('link copy!!!!', inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <ButtonIcon className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </ButtonIcon>
    </InputRoot>
  )
}
