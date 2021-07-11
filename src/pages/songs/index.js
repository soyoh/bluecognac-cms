import React from 'react'

import Layout from '../../components/Layout'
import SongList from '../../components/SongList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
            <SongList />
        </div>    
      </Layout>
    )
  }
}
