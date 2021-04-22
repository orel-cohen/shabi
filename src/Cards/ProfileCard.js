import { Card } from 'antd';

function ProfileCard(props) {
    return (
        <Card style={{ width: 300 }}>
           {/* {props.username} */}
            <p>username</p>
            <p>my score</p>
        </Card>
    );
}

export default ProfileCard;
