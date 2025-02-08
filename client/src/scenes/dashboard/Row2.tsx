import DashboardBox from '@/components/DashboardBox'
import React from 'react'

type Props = {}

const Row2 = (props: Props) => {
    return (
        <>
            <DashboardBox gridArea="d" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="e" sx={{ height: '100%' }}></DashboardBox>
            <DashboardBox gridArea="f" sx={{ height: '100%' }}></DashboardBox>
        </>
    )
}

export default Row2