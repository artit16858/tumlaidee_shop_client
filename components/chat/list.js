import Link from "next/link";
import { Card } from 'antd';
const ListChat = (props) => {
    const { data, user } = props;
    return (
        <div>
            {data.map(item => (
                <div className="card" >
                    <Card
                        hoverable
                        bordered={false}
                        style={{ width: "100%" }}>{item.name} </Card>
                </div>
            ))}

        </div>
    );
}
export default ListChat;