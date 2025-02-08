import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row1 = (props: Props) => {
  return (
    <>
    
    <DashboardBox gridArea="a" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="b" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="c" sx={{ height: '100%' }}></DashboardBox>
    </>
  )
}

export default Row1