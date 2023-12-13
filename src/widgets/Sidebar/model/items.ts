import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Abouticon from 'shared/assets/icons/about-20-20.svg';
import Mainicon from 'shared/assets/icons/main-20-20.svg';
import Profileicon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: Mainicon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        icon: Abouticon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        icon: Profileicon,
        text: 'Профиль',
    },
];
