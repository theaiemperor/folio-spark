interface DrawerInterface {
    container: (() => HTMLElement) | undefined,
    open: boolean,
    handleDrawerToggle: () => void,
    Name: string,
    navItems: string[]
}



interface BarInterface {
    handleDrawerToggle: () => void,
    Name: string,
    navItems: string[]
}



interface ScrollProps {
    children: React.ReactElement,
    window?: () => Window
}


// interface for default navbar
interface navigationProps{
    window?: () => Window;
}

