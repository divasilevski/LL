import { PagePath } from '@/config/navigation'

import IconHistory from '@/assets/svg/history.svg'
import IconHome from '@/assets/svg/home.svg'
import IconUser from '@/assets/svg/user.svg'
import IconEdit from '@/assets/svg/edit.svg'
import IconPlus from '@/assets/svg/plus.svg'

const flatPages = [PagePath.Index]

const tabs = [
  { name: PagePath.Home, icon: IconHome },
  { name: PagePath.History, icon: IconHistory },
  { name: PagePath.User, icon: IconUser },
]

const titleMap = {
  [PagePath.Home]: 'home',
  [PagePath.History]: 'history',
  [PagePath.User]: 'profile',
  [PagePath.HomeCreate]: 'new source',
  [PagePath.UserEdit]: 'edit',
}

const actionMap = {
  [PagePath.Index]: { icon: IconHome, to: PagePath.Home },
  [PagePath.Home]: { icon: IconPlus, to: PagePath.HomeCreate },
  [PagePath.User]: { icon: IconEdit, to: PagePath.UserEdit },
}

export default function () {
  const route = useRoute()

  const hasTabBar = computed(() => {
    return tabs.some((tab) => route.path.includes(tab.name))
  })

  const isStickyHeader = computed(() => {
    return !flatPages.some((page) => route.path === page)
  })

  const headerTitle = computed(() => {
    if (route.path in titleMap) {
      return titleMap[route.path as keyof typeof titleMap]
    }
    return null
  })

  const pageAction = computed(() => {
    if (route.path in actionMap) {
      return actionMap[route.path as keyof typeof actionMap]
    }
    return null
  })

  return { tabs, hasTabBar, isStickyHeader, headerTitle, pageAction }
}
