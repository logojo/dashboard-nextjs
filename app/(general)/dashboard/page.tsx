import { SimpleWidget } from '@/app/components/SimpleWidget'

const MainPage = () => {
  return (
    <div className='text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Welcome to the dashboard! </span>

      <div className='flex flex-wrap gap-4 p-2 mt-6'>
        <SimpleWidget />
      </div>
    </div>
  )
}

export default MainPage
