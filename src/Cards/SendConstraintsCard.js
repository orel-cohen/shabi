import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

function SendConstraintsCard(props) {

    const history = useHistory();

    const onClickHandle = () => {
        history.push("send-constraints");
    }

    return (
        <Card onClick={onClickHandle} style={{ width: 300 }}>
           {/* {props.username} */}
            <p>החלף תורנות</p>
            <p>my score</p>
        </Card>
    );
}

export default SendConstraintsCard;
