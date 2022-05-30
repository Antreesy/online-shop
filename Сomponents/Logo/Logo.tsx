import Image from 'next/image'
import Light from './Logo.png'
import Dark from './DarkLogo.png'


interface LogoProps {
    width: number,
    height: number,
    type: string
}
const Logo: React.FC<LogoProps> = (props) => {
    const { width, height, type } = props
    return (
        <Image src={type === 'light' ? Light : Dark} width={width} height={height} />
    )
}

export default Logo


