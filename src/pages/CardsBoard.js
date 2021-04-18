import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'umi'
import { Row, Col, Card } from 'antd'
// import { Color } from 'utils'
// import { Page, ScrollBar } from 'components'
// import {
//   NumberCard,
//   Quote,
//   Sales,
//   Weather,
//   RecentSales,
//   Comments,
//   Completed,
//   Browser,
//   Cpu,
//   User,
// } from './components'
import styles from './CardsBoard.less'
// import store from 'store'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

// @connect(({ app, dashboard, loading }) => ({
//   dashboard,
//   loading,
// }))
class CardsBoard extends PureComponent {
  render() {
    // const userDetail = store.get('user')
    // const { avatar, username } = userDetail
    // const { dashboard, loading } = this.props
    // const {
    //   weather,
    //   sales,
    //   quote,
    //   numbers,
    //   recentSales,
    //   comments,
    //   completed,
    //   browser,
    //   cpu,
    //   user,
    // } = dashboard

    // const numberCards = numbers.map((item, key) => (
    //   <Col key={key} lg={6} md={12}>
    //     {/* <NumberCard {...item} /> */}
    //   </Col>
    // ))

    return (
    <div>

      <Card
        bordered={false}
        bodyStyle={{
          padding: '24px 36px 24px 0',
        }}
      >
        {/* <Sales data={sales} /> */}
        cshev
      </Card>
    
          <Card
            bordered={false}
            className={styles.weather}
            bodyStyle={{
              padding: 0,
              height: 204,
              // background: Color.blue,
            }}
          >
            {/* <Weather
              {...weather}
              loading={loading.effects['dashboard/queryWeather']}
            /> */}
            cshev 2
          </Card>
          <Card
            bordered={false}
            className={styles.quote}
            bodyStyle={{
              padding: 0,
              height: 204,
              // background: Color.peach,
            }}
          >
            {/* <ScrollBar> */}
              {/* <Quote {...quote} /> */}
            {/* </ScrollBar> */}
            cshev 3
          </Card>
        
    
      <Card bordered={false} {...bodyStyle}>
        {/* <RecentSales data={recentSales} /> */}
        cshev 4
      </Card>
    
      <Card bordered={false} {...bodyStyle}>
        {/* <ScrollBar> */}
          {/* <Comments data={comments} /> */}
        {/* </ScrollBar> */}
        cshev 5
      </Card>
   
      <Card
        bordered={false}
        bodyStyle={{
          padding: '24px 36px 24px 0',
        }}
      >
        {/* <Completed data={completed} /> */}
        cshev 6
      </Card>
   
      <Card bordered={false} {...bodyStyle}>
        {/* <Browser data={browser} /> */}
        cshev 7
      </Card>
      <Card bordered={false} {...bodyStyle}>
        {/* <ScrollBar> */}
          {/* <Cpu {...cpu} /> */}
        {/* </ScrollBar> */}
        cshev 8
      </Card>
      <Card
        bordered={false}
        bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}
      >
        {/* <User {...user} avatar={avatar} username={username} /> */}
        cshev 9
      </Card>
    </div>
    )
  }
}

// Dashboard.propTypes = {
//   dashboard: PropTypes.object,
//   loading: PropTypes.object,
// }

export default CardsBoard;
