import Link from 'next/link'; 
 
 
const Header = () => {
    return (
        <>
            <div>
                <div className="bar"> 
                </div>
                <div> 
                        <Link href="/">
                            <a>ทำไรดี</a>
                        </Link> 
                </div> 
            </div> 
        </>
    )
}

export default Header