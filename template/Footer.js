import Link from 'next/link';


const Footer = () => {
    return (
        <div style={{
            textAlign: 'right'
        }}>
            Powered by
            <Link href="http://www.revelsoft.co.th/">
                <a>Revel Soft Co.,Ltd</a>
            </Link>
        </div>
    )
}

export default Footer