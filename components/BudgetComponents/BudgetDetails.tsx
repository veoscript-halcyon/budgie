import React from 'react'
import Link from 'next/link'
import DisplayIncomeAndExpenses from './DisplayIncomeAndExpenses'
import { RiSettings4Line } from 'react-icons/ri'

interface TypeProps {
  budget: any
  budget_details: any
}

// Budget Details Component - Display all budget details here...
const budget: React.FC<TypeProps> = ({ budget, budget_details }) => {
  return (
    <div className="flex flex-col w-full h-screen px-28 py-10 space-y- bg-purewhite">
      <div className="flex flex-row items-center justify-between w-full px-5 pb-3 border-b border-zinc-300">
        <div className="flex items-center justify-start w-full space-x-3">
          <button>
            {/* Menu button for Rename and Delete */}
            <RiSettings4Line className="w-5 h-5 text-zinc-800" />
          </button>
          <h3 className="font-bold text-2xl">{ budget.name }</h3>
        </div>
        <div className="flex flex-row items-center justify-center w-full space-x-2">
          <span className="text-base">Current Balance:</span>
          <span className="px-3 rounded-md font-poppins font-normal text-base text-white bg-blue-600">₱ {budget.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
        <div className="flex items-center justify-end w-full divide-x divide-white">
          <Link href="/">
            <a className="px-3 py-1 rounded-l-md font-poppins text-[14px] text-white bg-mattblack transition ease-in-out duration-300 hover:bg-opacity-70">
              Income
            </a>
          </Link>
          <Link href="/">
            <a className="px-3 py-1 rounded-none font-poppins text-[14px] text-white bg-mattblack transition ease-in-out duration-300 hover:bg-opacity-70">
              Expenses
            </a>
          </Link>
          <Link href="/">
            <a className="px-3 py-1 rounded-r-md font-poppins text-[14px] text-white bg-mattblack transition ease-in-out duration-300 hover:bg-opacity-70">
              Paid
            </a>
          </Link>
        </div>
      </div>
      {/* Budget Tracker Display Income and Expenses */}
      <div className="flex flex-col items-center w-full h-full max-h-[28rem] overflow-hidden border-l border-r border-b border-zinc-300">
        <div className="flex flex-row items-center w-full divide-x border-b border-zinc-300">
          <div className="flex items-center w-full space-x-2 p-3">
            <span className="font-bold">Type</span>
            <span className="text-xs text-zinc-500">e.g. Income/Expenses</span>
          </div>
          <div className="flex items-center w-full space-x-2 p-3">
          <span className="font-bold">Name</span>
            <span className="text-xs text-zinc-500">e.g. Income: Salary Expense: Rent etc.</span>
          </div>
          <div className="flex items-center w-full p-3 font-bold">
            Values
          </div>
          <div className="flex items-center w-full max-w-[10rem] p-3 font-bold">
            Actions
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <DisplayIncomeAndExpenses
            budget={budget}
            budget_details={budget_details}
          />
        </div>
      </div>
    </div>
  )
}

export default budget