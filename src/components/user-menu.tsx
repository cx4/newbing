'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { version } from '../../package.json'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IconCopy, IconExternalLink, IconGitHub } from '@/components/ui/icons'
import SettingIcon from '@/assets/images/settings.svg'
import { useEffect, useState } from 'react'

export function UserMenu() {
  const [host, setHost] = useState('')
  useEffect(() => {
    setHost(location.host)
  }, [])
  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="pl-0">
            <div className="flex items-center justify-center text-xs font-medium uppercase rounded-full select-none h-7 w-7 shrink-0 bg-muted/50 text-muted-foreground">
              <Image alt="settings" src={SettingIcon} width={20} />
            </div>
            <span className="ml-2">设置</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-[180px] bg-background">
          <DropdownMenuItem
            onClick={() =>
              location.href='#dialog="settings"'
            }
            className="cursor-pointer"
          >
            设置用户
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              location.href='#dialog="voice"'
            }
            className="cursor-pointer"
          >
            语音设置
          </DropdownMenuItem>



          <DropdownMenuItem className="flex-col items-start">
            <div className="font-medium">版本信息 {version}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex-col items-start">
            <div className="font-medium">空间地址</div>
            <div className="text-xs text-zinc-500">{host}</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
