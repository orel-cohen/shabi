import { Card } from 'antd';

function ProfileCard(props) {
    return (
        <Card style={{ width: 300 }}>
           {/* {props.username} */}
            <p>ישראל ישראלי</p>
            <p>הניקוד שלי</p>
            <p>הקבוצות שלי</p>
        </Card>
    );
}

export default ProfileCard;
