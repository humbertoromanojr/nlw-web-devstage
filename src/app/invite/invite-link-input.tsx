import { Copy, Link } from 'lucide-react'

import { ButtonIcon } from '@/components/button-icon'
import { InputField, InputIcon, InputRoot } from '@/components/input'

export function InviteLinkInput() {
  return (
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
  )
}
