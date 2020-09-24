import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Sider } = Layout;

export default function _Menu(props) {
    const { routes } = props;
    return (
        <Sider width={200} style={{ background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'center', background: '#001529' }}>
                {/* <img style={{
                    width: 65
                }} src="/assets/image/tumlaidee-icon.png" alt="my image" /> */}
                <label style={{
                    color: '#fff',
                    margin: 'auto',
                    fontSize: '18px'
                }}>TumLaiDee.com</label>
            </div>
            <Menu
                theme="dark"
                mode="vertical"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                {routes.map((prop, idx) => (
                    <Menu.Item key={idx}>
                        <Link href={prop.path}>
                            {prop.name}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider >
    )
}