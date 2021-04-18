import { Card } from 'antd';

ReactDOM.render(
    <Card
        bordered={false}
        // className={styles.weather}
        bodyStyle={{
            padding: 0,
            height: 204,
            // background: Color.blue,
        }}
    >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>,
    mountNode,
);