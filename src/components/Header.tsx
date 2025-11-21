type HeaderProps = {
    image: {
        src: string;
        alt: string;
    };
    children: React.ReactNode;
}
export default function Header(props: HeaderProps) {
    return <header>
        <img src={props.image.src} alt={props.image.alt} />
        {props.children}
    </header>;
}