export const metadata = {
    title: 'Dashboard | UCode Clinic',
    description: 'UCode Clinic Dashboard Page',
}


export default function DashBoardLayout({ children }) { 
    return (
        <html lang="en">
        <body className='bg-green-200'>
            {children}
        </body>
      </html>    
    )
}
