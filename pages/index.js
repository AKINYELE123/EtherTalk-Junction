import React, { useContext } from 'react'

// import { EtherTalkContext } from '../context/EthertalkContext'
import { Filter, Friend } from '../components/index';

const EtherTalk = () => {
// const {} = useContext(EtherTalkContext);
  return (
    <div>
      <Filter />
      <Friend />
    </div>
  )
}

export default EtherTalk