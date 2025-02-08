import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
          <DashboardBox gridArea="g" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="h" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="i" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="j" sx={{ height: '100%' }}></DashboardBox>
    </>
  )
}

export default Row3