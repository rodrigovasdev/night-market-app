import React from 'react'
import CardContainer from '../CardContainer'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'

interface AdminCarProps {
    children: React.ReactNode
    title: string;
    value: string;
    percentage: number;
    secondTitle: string;
}

function AdminInfoCard(props:AdminCarProps) {
    const {title, value, percentage, secondTitle, children} = props
  return (
    <>
        <CardContainer width = "w-full md:w-md" padding='py-4' bgClass='bg-white border border-gray-300' margin = 'm-0'>
            <div className = "mx-5 flex flex-col">
                <div className = "flex justify-between">
                    <span className = "font-semibold text-neutral-500 my-auto">{title}</span>
                    <div className="w-8 h-8 text-neutral-500">
                        {children}
                    </div>
                </div>

                <span className = "font-bold text-xl">{value}</span>

                <div className="flex">
                    <span className="flex items-center text-green-500 gap-1">
                        <ArrowTrendingUpIcon className="w-4 h-4" />
                        +{percentage}% from last month
                    </span>
                </div>

                <span className = "text-neutral-500 ">{secondTitle}</span>

            </div>
        </CardContainer>
    </>
  )
}

export default AdminInfoCard